module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/all',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'prettier/@typescript-eslint',
  ],
  plugins: ['prettier'],
  rules: {
    '@typescript-eslint/no-magic-numbers': 'off',
    '@typescript-eslint/no-type-alias': ['error', { allowAliases: 'in-unions-and-intersections' }],
    '@typescript-eslint/no-unnecessary-condition': ['error', { ignoreRhs: true }],
    '@typescript-eslint/no-unused-expressions': ['error', { allowTaggedTemplates: true }],
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/restrict-template-expressions': ['error', { allowNumber: true, allowBoolean: true }],
    '@typescript-eslint/strict-boolean-expressions': ['error', { ignoreRhs: true }],
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
    'no-unused-expressions': 'off',
    'no-unused-vars': 'off',
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
    es2020: true,
  },
};
