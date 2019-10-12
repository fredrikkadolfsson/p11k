module.exports = {
  extends: '../../../.eslintrc',
  rules: {
    'graphql/template-strings': [
      'error',
      {
        env: 'apollo',
        schemaJson: require('./schema.json'),
      },
    ],
  },
  plugins: ['graphql'],
};
