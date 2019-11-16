#!/bin/sh

if [ $service = $ORIGIN_SERVICE ]; then
    # Set dotenv paths in environment
    . "$ROOT_DIR/scripts/docker_set_dotenv.sh"
    
    # Create docker-compose command
    cmd="docker-compose $depends_on_configs up"
    
    echo ""
    echo "Running: $cmd"
    echo ""
    
    eval $cmd
else
    if [ ! -z "$depends_on_configs" ]; then
        echo "$service-dependencies: $depends_on_configs"
    fi
fi
