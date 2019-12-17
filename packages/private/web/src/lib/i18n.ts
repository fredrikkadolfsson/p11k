import NextI18Next from 'next-i18next';
import config from '../config';
import { Locale } from '../typings';

const NextI18NextInstance = new NextI18Next({
  defaultLanguage: config.LOCALE_DEFAULT,
  fallbackLng: config.LOCALE_DEFAULT,
  otherLanguages: config.LOCALE_SUPPORTED.filter((locale: Locale) => locale !== config.LOCALE_DEFAULT),

  // Until public dir is fixed: https://github.com/isaachinman/next-i18next/issues/523
  localePath: typeof window === 'undefined' ? 'public/locales' : 'locales',
  returnEmptyString: false,

  detection: {
    order: ['querystring', 'cookie', 'localStorage', 'path', 'subdomain'],
    lookupQuerystring: 'lng',
    lookupCookie: 'lng',
    lookupHeader: 'accept-language',
    caches: ['cookie'],
    cookieSecure: config.NODE_ENV !== 'development',
  },
});

export default NextI18NextInstance;

export const { appWithTranslation } = NextI18NextInstance;
