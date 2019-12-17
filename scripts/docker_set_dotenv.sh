#!/bin/sh

# Get depentend compose config files
delimiter="-f ../"
s=$depends_on_configs$delimiter
compose_files=();
while [[ $s ]]; do
    compose_files+=( "${s%%"$delimiter"*}" );
    s=${s#*"$delimiter"};
done;
unset 'compose_files[0]'


for compose_file in "${compose_files[@]}"; do
    delimiter="/"
    s=$compose_file$delimiter
    owner=();
    while [[ $s ]]; do
        owner+=( "${s%%"$delimiter"*}" );
        s=${s#*"$delimiter"};
    done;
    
    path=$(find $ROOT_DIR/packages/private -name "${owner[0]}")
    
    if [ ! -z "$path" ]; then
        service_dir=$(echo "${owner[0]}_DIR" | tr [a-z] [A-Z])
        export $service_dir=$path
    fi
done
