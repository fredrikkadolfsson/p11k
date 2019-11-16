interface Config {
  ACCOUNT_URL: string;
  ENABLE_PLAYGROUND: boolean;
  ENABLE_TRACING: boolean;
  JWT_COOKIE_NAME: string;
  PORT: string;
}

const config: Config = {
  ACCOUNT_URL: process.env.ACCOUNT_URL ?? 'http://localhost:5000',
  ENABLE_PLAYGROUND: Boolean(process.env.ENABLE_PLAYGROUND ?? true),
  ENABLE_TRACING: Boolean(process.env.ENABLE_TRACING ?? true),
  JWT_COOKIE_NAME: process.env.JWT_COOKIE_NAME ?? 'AUTHENTICATION_TOKEN',
  PORT: process.env.PORT ?? '4000',
};

export default config;
