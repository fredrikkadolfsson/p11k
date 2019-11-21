import { Locale, NodeEnv } from './typings';

interface Config {
  GRAPHQL_URL: string;
  JWT_COOKIE_NAME: string;
  LOCALE_DEFAULT: Locale;
  LOCALE_SUPPORTED: Locale[];
  NODE_ENV: NodeEnv;
  PORT: string;
}

const config: Config = {
  LOCALE_DEFAULT: 'en',
  LOCALE_SUPPORTED: ['en', 'sv'],
  GRAPHQL_URL: process.env.GRAPHQL_URL ?? 'http://localhost:4000/graphql',
  JWT_COOKIE_NAME: process.env.JWT_COOKIE_NAME ?? 'AUTHENTICATION_TOKEN',
  NODE_ENV: (process.env.NODE_ENV as NodeEnv) ?? 'development',
  PORT: process.env.PORT ?? '3000',
};

export default config;
