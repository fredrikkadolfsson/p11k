const config = require('./src/localeConfig');

module.exports = {
  presets: ['next/babel'],
  plugins: [
    [
      'i18next-extract',
      {
        defaultNS: 'common',
        locales: config.LOCALE_SUPPORTED,
        outputPath: './public/locales/{{locale}}/{{ns}}.json',
        useI18nextDefaultValue: [config.LOCALE_DEFAULT],
      },
    ],
    'emotion',
  ],
};
