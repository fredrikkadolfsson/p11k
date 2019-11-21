import NextI18Next from 'next-i18next';
import config from '../config';
import { Locale } from '../typings';

const NextI18NextInstance = new NextI18Next({
  defaultLanguage: config.LOCALE_DEFAULT,
  otherLanguages: config.LOCALE_SUPPORTED.filter((locale: Locale) => locale !== config.LOCALE_DEFAULT),

  localePath: 'locales',
  serverLanguageDetection: config.NODE_ENV !== 'development',
});

export default NextI18NextInstance;

export const { appWithTranslation } = NextI18NextInstance;
