const config = require('./src/localeConfig');

module.exports = {
  presets: ['next/babel'],
  plugins: [
    '@babel/plugin-proposal-nullish-coalescing-operator',
    '@babel/plugin-proposal-optional-chaining',
    [
      'i18next-extract',
      {
        defaultNS: 'common',
        locales: config.LOCALE_SUPPORTED,
        outputPath: './src/locales/{{locale}}/{{ns}}.json',
        useI18nextDefaultValue: [config.LOCALE_DEFAULT],
      },
    ],
    'emotion',
  ],
};
