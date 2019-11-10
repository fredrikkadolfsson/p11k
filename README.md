# Perfect Stack aka _p11k_ &middot; [![CircleCI](https://circleci.com/gh/fredrikkadolfsson/p11k/tree/master.svg?style=shield&circle-token=5793f5a0810d01ef3d6ca9994d4163fc11622f0b)](https://circleci.com/gh/fredrikkadolfsson/p11k/tree/master) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

_p11k_ is a web-application [monorepo](https://en.wikipedia.org/wiki/Monorepo) built with an educational purpose, for myself and others if interested, to reach what I believe would be the _perfect stack_. The focus lies on the _frontend_ and [_graphql_](https://graphql.org/learn/) level. But explorations regarding [_microservices_](https://en.wikipedia.org/wiki/Microservices) implementation and architecture will be investigated. Every decision and implementation will be highly opinionated of my own opinions. Where the goal is to have a stack that is easy to: build upon, maintain and fun to work with.

## Development

Development of the services in _p11k_ is done through [docker-compose](https://docs.docker.com/compose/) and custom made [shell scripts](https://en.wikipedia.org/wiki/Shell_script). Running `yarn dev` in any service folder starts the given service and all its dependencies.

### Requirements

- `docker`: [Installation instructions.](https://docs.docker.com/compose/install/)
- `yarn`: [Installation instructions.](https://yarnpkg.com/lang/en/docs/install/)
- `yq`: [Installation instructions.](https://yq.readthedocs.io/en/latest/)

### Install

Do the following steps after the first time cloning the repo or after a clean install.

1. Run `cp sample.npmrc .npmrc` and change `${GITHUB_TOKEN}` to your [GitHub token](https://github.com/settings/tokens).
1. Run `yarn`
1. Run `yarn lerna:bootstrap`
