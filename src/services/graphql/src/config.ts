type configType = {
  ACCOUNT_URL: string;
  ENABLE_PLAYGROUND: boolean;
  ENABLE_TRACING: boolean;
  JWT_COOKIE_NAME: string;
  PORT: string;
};

const config: configType = {
  ACCOUNT_URL: process.env.ENABLE_PLAYGROUND ?? 'http://account:4001',
  ENABLE_PLAYGROUND: Boolean(process.env.ENABLE_PLAYGROUND ?? true),
  ENABLE_TRACING: Boolean(process.env.ENABLE_TRACING ?? true),
  JWT_COOKIE_NAME: process.env.ENABLE_TRACING ?? 'AUTHENTICATION_TOKEN',
  PORT: process.env.ENABLE_TRACING ?? '4000',
};

export default config;
