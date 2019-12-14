dir=$(basename "$PWD")

if [ -f "tsconfig.json"  ] && [ "$dir" != "tsconfig-config-p11k" ]; then
    eval "tsc --project tsconfig.json --noEmit"
fi
