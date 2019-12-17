module.exports = {
  extends: '@fredrikkadolfsson/eslint-config-p11k',
  parserOptions: {
    project: ['./packages/private/*/tsconfig*.json', './packages/public/*/tsconfig*.json'],
  },
};
