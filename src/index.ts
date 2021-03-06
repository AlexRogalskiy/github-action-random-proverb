import * as core from '@actions/core'
import * as github from '@actions/github'

import { ConfigOptions, PayloadOptions } from '../typings/domain-types'
import { Optional } from '../typings/standard-types'

import { getConfigOptions } from './utils/files'
import { isNullOrUndefined, isValidFile } from './utils/validators'
import { getProperty, getRequiredProperty } from './utils/properties'
import { toInt } from './utils/commons'
import { serialize } from './utils/serializers'

import { coreError } from './utils/loggers'
import { profile } from './utils/profiles'

import { valueError } from './errors/value.error'

const octokit = new github.GitHub(getRequiredProperty('GITHUB_TOKEN'))

const getCommentId = async (options: PayloadOptions): Promise<Optional<number>> => {
    const {
        repoOptions,
        resourceOptions: { requestId },
    } = options

    const { data: comments } = await octokit.issues.listComments({
        ...repoOptions,
        issue_number: requestId,
    })

    const res = comments.filter(comment => comment.user.login === 'github-actions[bot]')

    if (res.length > 0) {
        return res[0].id
    }

    return
}

const replaceComment = async (options: PayloadOptions): Promise<void> => {
    const {
        commentOptions: { message },
        repoOptions,
        resourceOptions: { requestId },
    } = options

    const commentId = await getCommentId(options)

    await (commentId
        ? octokit.issues.updateComment({ ...repoOptions, comment_id: commentId, body: message })
        : octokit.issues.createComment({ ...repoOptions, issue_number: requestId, body: message }))
}

const processComment = async (options: ConfigOptions): Promise<void> => {
    try {
        const { styleOptions, resourceOptions, repoOptions } = options

        const commentText = `![Styled Proverbs](${profile.requestOptions.url}?theme=${styleOptions.theme}&layout=${styleOptions.layout})`
        const footer = `Triggered by commit: ${github.context.sha}`

        const message = [commentText, footer].join('\n\n')
        const commentOptions = { message }

        await replaceComment({ commentOptions, repoOptions, resourceOptions })
    } catch (error) {
        coreError(`Cannot process input comment options: ${serialize(options)}`)
        throw error
    }
}

const buildConfigOptions = (options: Partial<ConfigOptions>): ConfigOptions => {
    const theme = options.styleOptions?.theme || getProperty('theme')
    const layout = options.styleOptions?.layout || getProperty('layout')
    const requestId =
        options.resourceOptions?.requestId ||
        getProperty('requestId') ||
        github.context.payload.pull_request?.number

    if (isNullOrUndefined(requestId)) {
        throw valueError(`Invalid pull request identifier: ${requestId}`)
    }

    const styleOptions = { theme, layout }
    const resourceOptions = { requestId: toInt(`${requestId}`) }
    const repoOptions = github.context.repo

    return {
        styleOptions,
        resourceOptions,
        repoOptions,
    }
}

const getOperationStatus = async (option: Partial<ConfigOptions>): Promise<void> => {
    const options = buildConfigOptions(option)

    return await processComment(options)
}

const executeOperation = async (...options: Partial<ConfigOptions>[]): Promise<void> => {
    const promises: Promise<void>[] = []

    for (const option of options) {
        promises.push(getOperationStatus(option))
    }

    await Promise.all(promises)
}

const getOperationResult = async (sourceData: string): Promise<void> => {
    const params = isValidFile(sourceData, '.json') ? getConfigOptions(sourceData) : [{}]

    return await executeOperation(...params)
}

const runCommentOperation = async (): Promise<void> => {
    const sourceData = getProperty('sourceData')

    await getOperationResult(sourceData)
}

export default async function run(): Promise<void> {
    try {
        await runCommentOperation()
    } catch (error) {
        core.setFailed(`Cannot process input comment data, message: ${error.message}`)
    }
}

run()
