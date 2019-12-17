module.exports = {
  extends: '../../../.eslintrc',
  rules: {
    'graphql/template-strings': [
      'error',
      {
        env: 'apollo',
        schemaJson: require('./src/generated/introspection.json'),
      },
    ],
  },
  plugins: ['graphql'],
};
