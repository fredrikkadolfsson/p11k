type configType = {
  GRAPHQL_URL: string;
  JWT_COOKIE_NAME: string;
};

const config: configType = {
  GRAPHQL_URL: process.env.GRAPHQL_URL ?? 'http://localhost:4000/graphql',
  JWT_COOKIE_NAME: process.env.JWT_COOKIE_NAME ?? 'AUTHENTICATION_TOKEN',
};

export default config;
