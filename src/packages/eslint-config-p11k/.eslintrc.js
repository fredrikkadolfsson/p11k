module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:react/recommended', 'prettier/@typescript-eslint'],
  plugins: ['prettier'],
  rules: {
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: '@emotion/styled',
            importNames: ['default'],
            message: 'Please use default export styled from @fredrikkadolfsson/ui instead.',
          },
        ],
      },
    ],
    'prettier/prettier': 'error',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/self-closing-comp': 'error',
  },
  globals: {
    React: 'writable',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
