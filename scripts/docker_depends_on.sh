#!/bin/sh

# Get service name
service=$(basename "$PWD")

# Configure origin service and add own config
if [ -z "$ORIGIN_SERVICE" ]; then
    export ORIGIN_SERVICE=$service
    depends_on_configs="-f docker/config.yaml"
else
    depends_on_configs="-f ../$service/docker/config.yaml"
fi

# Get depends_on array from docker-compose config
depends_on=($(yq -y .services.$service.depends_on docker/config.yaml))

# Remove unwanted -
for i in "${!depends_on[@]}"; do
    if [[ ${depends_on[i]} = "-" ]]; then
        unset 'depends_on[i]'
    fi
done

# Build up depends_on_configs variable
for dep in "${depends_on[@]}"; do
    dep_dir="../$dep"
    dep_run="$dep_dir/docker/run.sh"
    
    # Build the dependencys dependencies
    if [ -f "$dep_run" ]; then
        dep_resp=$(cd $dep_dir && sh "./docker/run.sh")
        echo "$dep_resp"
        
        dep_dependencies=$(echo "$dep_resp" | grep "$dep-dependencies")
        dep_dependencies=${dep_dependencies#"$dep-dependencies: "}
        
        # Add dep_dependencies if exists
        if [ ! -z "$dep_dependencies" ]; then
            depends_on_configs="$depends_on_configs $dep_dependencies"
        fi
    fi
done
