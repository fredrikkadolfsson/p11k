module.exports = {
  extends: '../../../.eslintrc',
  rules: {
    'graphql/template-strings': [
      'error',
      {
        env: 'apollo',
        schemaJson: require('./generated/introspection.json'),
      },
    ],
  },
  plugins: ['graphql'],
};
