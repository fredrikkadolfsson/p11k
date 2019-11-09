#!/bin/sh

if [ $service = $ORIGIN_SERVICE ]; then
    # Create docker-compose command
    cmd="docker-compose -f docker/config.yaml"
    
    if [ ! -z "$depends_on_configs" ]; then
        cmd="$cmd $depends_on_configs up"
    else
        cmd="$cmd up"
    fi
    
    echo ""
    echo "Running: $cmd"
    echo ""
    
    eval $cmd
else
    if [ ! -z "$depends_on_configs" ]; then
        echo "$service-dependencies: $depends_on_configs"
    fi
fi
