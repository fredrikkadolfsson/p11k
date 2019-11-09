#!/bin/sh

export ROOT_DIR=$(git rev-parse --show-toplevel)

. "$ROOT_DIR/scripts/docker_depends_on.sh"
. "$ROOT_DIR/scripts/docker_compose_run.sh"
