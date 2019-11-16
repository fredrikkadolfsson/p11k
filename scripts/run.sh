#!/bin/sh

export ROOT_DIR=$(git rev-parse --show-toplevel)

export ACCOUNT_DIR="/Users/fredrik/Documents/repositories/private/p11k/src/services/account"
export GRAPHQL_DIR="/Users/fredrik/Documents/repositories/private/p11k/src/services/graphql"
export WEB_DIR="/Users/fredrik/Documents/repositories/private/p11k/src/services/web"

. "$ROOT_DIR/scripts/docker_depends_on.sh"
. "$ROOT_DIR/scripts/docker_compose_run.sh"
