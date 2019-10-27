module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'prettier/@typescript-eslint',
  ],
  plugins: ['prettier'],
  rules: {
    'arrow-body-style': 'error',
    'brace-style': 'error',
    'import/order': ['error', { 'newlines-between': 'never' }],
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: '@emotion/styled',
            importNames: ['default'],
            message: 'Use default export styled from @fredrikkadolfsson/ui instead.',
          },
        ],
        patterns: ['@emotion/styled'],
      },
    ],
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'object-shorthand': 'error',
    'prettier/prettier': 'error',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/self-closing-comp': 'error',
    'sort-imports': [
      'error',
      {
        ignoreDeclarationSort: true,
      },
    ],
  },
  globals: {
    React: 'writable',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
    node: true,
  },
};
