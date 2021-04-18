# *Random Proverb*

> GitHub Action to provide random proverbs on issues/pull requests

[![GitHub marketplace](https://img.shields.io/badge/marketplacegithub-styled--random--proverb-blue?logo=github)](https://github.com/marketplace/actions/styled-random-proverb)

[![management: perfekt👌](https://img.shields.io/badge/management-perfekt👌-red.svg)](https://github.com/lekterable/perfekt)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
![Mergify Status](https://img.shields.io/endpoint.svg?url=https://gh.mergify.io/badges/AlexRogalskiy/github-action-random-proverb)
[![Reviewed by Hound](https://img.shields.io/badge/Reviewed_by-Hound-8E64B0.svg)](https://houndci.com)
[![Chat](https://img.shields.io/badge/chat-discussions-success.svg)](https://github.com/AlexRogalskiy/github-action-random-proverb/discussions)

[![DeepSource](https://deepsource.io/gh/AlexRogalskiy/github-action-random-proverb.svg/?label=active+issues&show_trend=true)](https://deepsource.io/gh/AlexRogalskiy/github-action-random-proverb/?ref=repository-badge)
[![DeepScan grade](https://deepscan.io/api/teams/11946/projects/16759/branches/365085/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=11946&pid=16759&bid=365085)

![GitHub tag (latest by date)](https://img.shields.io/github/v/tag/AlexRogalskiy/github-action-random-proverb)
![GitHub Release Date](https://img.shields.io/github/release-date/AlexRogalskiy/github-action-random-proverb)
![Lines of code](https://tokei.rs/b1/github/AlexRogalskiy/github-action-random-proverb?category=lines)
![GitHub closed issues](https://img.shields.io/github/issues-closed/AlexRogalskiy/github-action-random-proverb)
![GitHub closed pull requests](https://img.shields.io/github/issues-pr-closed/AlexRogalskiy/github-action-random-proverb)
![GitHub repo size](https://img.shields.io/github/repo-size/AlexRogalskiy/github-action-random-proverb)
![GitHub last commit](https://img.shields.io/github/last-commit/AlexRogalskiy/github-action-random-proverb)
![GitHub language count](https://img.shields.io/github/languages/count/AlexRogalskiy/github-action-random-proverb)
![GitHub search hit counter](https://img.shields.io/github/search/AlexRogalskiy/github-action-random-proverb/goto)
![GitHub Repository branches](https://badgen.net/github/branches/AlexRogalskiy/github-action-random-proverb)
![GitHub Repository dependents](https://badgen.net/github/dependents-repo/AlexRogalskiy/github-action-random-proverb)
[![Renovatebot](https://badgen.net/badge/renovate/enabled/green?cache=300)](https://renovatebot.com/)
[![Dependabot](https://img.shields.io/badge/dependabot-enabled-1f8ceb.svg?style=flat-square)](https://dependabot.com/)
[![NewReleases](https://newreleases.io/badge.svg)](https://newreleases.io/github/AlexRogalskiy/github-action-random-proverb)
[![Hits-of-Code](https://hitsofcode.com/github/alexrogalskiy/github-action-random-proverb?branch=master)](https://hitsofcode.com/github/alexrogalskiy/github-action-random-proverb?branch=master/view?branch=master)
[![dependencies Status](https://status.david-dm.org/gh/AlexRogalskiy/github-action-random-proverb.svg)](https://david-dm.org/AlexRogalskiy/github-action-random-proverb)
[![devDependencies Status](https://status.david-dm.org/gh/AlexRogalskiy/github-action-random-proverb.svg)](https://david-dm.org/AlexRogalskiy/github-action-random-proverb?type=dev)

[![Total alerts](https://img.shields.io/lgtm/alerts/g/AlexRogalskiy/github-action-random-proverb.svg?logo=lgtm\&logoWidth=18)](https://lgtm.com/projects/g/AlexRogalskiy/github-action-random-proverb/alerts/)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/AlexRogalskiy/github-action-random-proverb.svg?logo=lgtm\&logoWidth=18)](https://lgtm.com/projects/g/AlexRogalskiy/github-action-random-proverb/context:javascript)

[![codecov](https://codecov.io/gh/AlexRogalskiy/github-action-random-proverb/branch/master/graph/badge.svg?token=sN03T2VTfV)](https://codecov.io/gh/AlexRogalskiy/github-action-random-proverb)
[![CI](https://github.com/AlexRogalskiy/github-action-random-proverb/workflows/CI/badge.svg)](https://github.com/AlexRogalskiy/github-action-random-proverb/actions/workflows/build.yml)
[![CircleCI](https://circleci.com/gh/AlexRogalskiy/github-action-random-proverb.svg?style=shield)](https://circleci.com/gh/AlexRogalskiy/github-action-random-proverb)
[![GitHub Super-Linter](https://github.com/AlexRogalskiy/github-action-random-proverb/workflows/Lint%20Code%20Base/badge.svg)](https://github.com/marketplace/actions/super-linter)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![ComVer](https://img.shields.io/badge/ComVer-compliant-brightgreen.svg)][repo]
[![Public workflows that use this action.][total_usages]][search_results]
[![Licence][license_id]][license_content]

[![Chat](https://img.shields.io/badge/chat-discussions-success.svg)](https://github.com/AlexRogalskiy/github-action-random-proverb/discussions)
[![Open questions](https://img.shields.io/badge/Open-questions-blue.svg?style=flat-curved)](https://github.com/AlexRogalskiy/github-action-random-proverb/labels/question)
[![Open bugs](https://img.shields.io/badge/Open-bugs-red.svg?style=flat-curved)](https://github.com/AlexRogalskiy/github-action-random-proverb/labels/bug)

## *Table of contents*

- [*Description*](#description)
- [*Inputs*](#inputs)
  - [`sourceData`](#sourcedata)
  - [`requestId`](#requestid)
  - [`theme`](#theme)
  - [`layout`](#layout)
  - [`GITHUB_TOKEN`](#github_token)
- [*Examples*](#examples)
  - [Basic configuration](#basic-configuration)
  - [Complete configuration](#complete-configuration)
- [*Visitor stats*](#visitor-stats)
- [*Licensing*](#licensing)
- [*Authors*](#authors)
- [*Versioning*](#versioning)
- [*Contribution*](#contribution)
- [*Acknowledgement*](#acknowledgement)
- [*Forks*](#forks)
- [*Development Support*](#development-support)

## *Description*

<p align="center" style="text-align:center;">
    <a href="https://www.typescriptlang.org/">
        <img src="https://img.shields.io/badge/typescript%20-%23323330.svg?&logo=typescript&logoColor=%23F7DF1E" alt="Typescript" />
    </a>
    <a href="https://www.repostatus.org/#active">
        <img src="https://img.shields.io/badge/Project%20Status-Active-brightgreen" alt="Project Status: Active – The project has reached a stable, usable state and is being actively developed." />
    </a>
    <a href="https://badges.pufler.dev">
        <img src="https://badges.pufler.dev/created/AlexRogalskiy/github-action-random-proverb" alt="Project created status" />
    </a>
    <a href="https://badges.pufler.dev">
        <img src="https://badges.pufler.dev/updated/AlexRogalskiy/github-action-random-proverb" alt="Project updated status" />
    </a>
</p>

Provides random proverbs on GitHub issues/pull requests.

## *Inputs*

### `sourceData`

**Optional** JSON data source file with action parameters:

```json
[
    {
        "styleOptions": {
            "theme": "nightOwl",
            "layout": "churchill"
        },
        "resourceOptions": {
            "requestId": 10
        }
    },
    {
        "resourceOptions": {
            "requestId": 9
        }
    }
]
```

### `requestId`

**Optional** Request identifier

### `theme`

**Optional** Proverb image theme

### `layout`

**Optional** Proverb image layout

### `GITHUB_TOKEN`

**Required** GitHub action token

## *Examples*

### Basic configuration

```yml
- name: Random proverb on issue by current pull request
  uses: alexrogalskiy/github-action-random-proverb@master
  with:
    GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

### Complete configuration

```yml
- name: Random proverb on issue by current pull request
  uses: alexrogalskiy/github-action-random-proverb@master
  with:
    theme: 'nightOwl'
    layout: 'churchill'
    requestId: 10
    GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

Running locally:

- `npm run start:action --action github-action-random-proverb --GITHUB_TOKEN ${{ secrets.GITHUB_TOKEN }}`

## *Visitor stats*

[![GitHub page hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FAlexRogalskiy%2Fgithub-action-random-proverb\&count_bg=%2379C83D\&title_bg=%23555555\&icon=\&icon_color=%23E7E7E7\&title=hits\&edge_flat=true)](https://hits.seeyoufarm.com)

![GitHub stars](https://img.shields.io/github/stars/AlexRogalskiy/github-action-random-proverb?style=social)
![GitHub forks](https://img.shields.io/github/forks/AlexRogalskiy/github-action-random-proverb?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/AlexRogalskiy/github-action-random-proverb?style=social)

## *Licensing*

***File Size*** is distributed under LGPL version 3 or later,
\[[License](https://github.com/AlexRogalskiy/github-action-random-proverb/blob/master/LICENSE)]. LGPLv3 is additional
permissions on top of GPLv3.

![license](https://user-images.githubusercontent.com/19885116/48661948-6cf97e80-ea7a-11e8-97e7-b45332a13e49.png)

## *Authors*

***File Size*** is maintained by the following GitHub team-members:

- [![Author](https://img.shields.io/badge/author-AlexRogalskiy-FB8F0A)](https://github.com/AlexRogalskiy)

with community support please contact with us if you have some question or proposition.

## *Versioning*

The project uses [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on
this repository][tags].

## *Contribution*

[![Contributors Display](https://badges.pufler.dev/contributors/AlexRogalskiy/github-action-random-proverb?size=50\&padding=5\&bots=true)](https://badges.pufler.dev)

Please read
[CONTRIBUTING.md](https://github.com/AlexRogalskiy/github-action-random-proverb/blob/master/.github/CONTRIBUTING.md)
for details on our code of conduct, and the process for submitting pull requests to us
([emoji key](https://allcontributors.org/docs/en/emoji-key)).

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors)
specification. Contributions of any kind are welcome!

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
![Github contributors](https://img.shields.io/github/all-contributors/AlexRogalskiy/github-action-random-proverb)

See also the list of [contributors][contributors] who participated in this project.

## *Acknowledgement*

[![Stargazers repo roster for @AlexRogalskiy/github-action-random-proverb](https://reporoster.com/stars/AlexRogalskiy/github-action-random-proverb)][stars]

## *Forks*

[![Forkers repo roster for @AlexRogalskiy/github-action-random-proverb](https://reporoster.com/forks/AlexRogalskiy/github-action-random-proverb)][forkers]

## *Development Support*

Like ***File Size*** ? Consider buying me a coffee :)

[![Become a Patron](https://img.shields.io/badge/Become_Patron-Support_me_on_Patreon-blue.svg?style=flat-square\&logo=patreon\&color=e64413)](https://www.patreon.com/alexrogalskiy)
[![Buy Me A Coffee](https://img.shields.io/badge/Donate-Buy%20me%20a%20coffee-yellow.svg?logo=buy%20me%20a%20coffee)](https://www.buymeacoffee.com/AlexRogalskiy)
[![KoFi](https://img.shields.io/badge/Donate-Buy%20me%20a%20coffee-yellow.svg?logo=ko-fi)](https://ko-fi.com/alexrogalskiy)

***

[![forthebadge](https://img.shields.io/badge/made%20with-%20typescript-C1282D.svg?logo=typescript\&style=for-the-badge)](https://www.typescriptlang.org/)
[![forthebadge](https://img.shields.io/badge/powered%20by-%20github-7116FB.svg?logo=github\&style=for-the-badge)](https://github.com/)
[![forthebadge](https://img.shields.io/badge/build%20with-%20%E2%9D%A4-B6FF9B.svg?logo=heart\&style=for-the-badge)](https://forthebadge.com/)

[repo]: https://github.com/AlexRogalskiy/github-action-random-proverb

[tags]: https://github.com/AlexRogalskiy/github-action-random-proverb/tags

[issues]: https://github.com/AlexRogalskiy/github-action-random-proverb/issues

[pulls]: https://github.com/AlexRogalskiy/github-action-random-proverb/pulls

[wiki]: https://github.com/AlexRogalskiy/github-action-random-proverb/wiki

[stars]: https://github.com/AlexRogalskiy/github-action-random-proverb/stargazers

[forkers]: https://github.com/AlexRogalskiy/github-action-random-proverb/network/members

[contributors]: https://github.com/AlexRogalskiy/github-action-random-proverb/graphs/contributors

[license_id]: https://img.shields.io/github/license/AlexRogalskiy/github-action-random-proverb

[license_content]: https://github.com/AlexRogalskiy/github-action-random-proverb/blob/master/LICENSE

[total_usages]: https://img.shields.io/endpoint?url=https%3A%2F%2Fapi-git-master.endbug.vercel.app%2Fapi%2Fgithub-actions%2Fused-by%3Faction%3DAlexRogalskiy%2Fgithub-action-random-proverb%26badge%3Dtrue

[search_results]: https://github.com/search?o=desc&q=AlexRogalskiy/github-action-random-proverb+path%3A.github%2Fworkflows+language%3AYAML&s=&type=Code
