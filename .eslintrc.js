module.exports = {
  extends: '@fredrikkadolfsson/eslint-config-p11k',
  parserOptions: {
    project: ['./src/packages/*/tsconfig*.json', './src/services/*/tsconfig*.json'],
  },
};
