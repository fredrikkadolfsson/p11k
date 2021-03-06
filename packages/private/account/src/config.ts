import { Algorithm } from 'jsonwebtoken';

interface Config {
  DB_NAME: string;
  DB_PASSWORD: string;
  DB_USER: string;
  JWT_ALGORITHM: Algorithm;
  JWT_AUDIENCE: string;
  JWT_EXPIRES_IN: string;
  JWT_ISSUER: string;
  JWT_SUBJECT: string;
  PORT: string;
}

const config: Config = {
  DB_NAME: process.env.DB_NAME ?? 'accounts',
  DB_PASSWORD: process.env.DB_PASSWORD ?? 'developer_password',
  DB_USER: process.env.DB_USER ?? 'developer',
  JWT_ALGORITHM: (process.env.JWT_ALGORITHM as Algorithm | undefined) ?? 'RS256',
  JWT_AUDIENCE: process.env.JWT_AUDIENCE ?? 'http://localhost:3000',
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN ?? '12h',
  JWT_ISSUER: process.env.JWT_ISSUER ?? 'Dev corp',
  JWT_SUBJECT: process.env.JWT_SUBJECT ?? 'john@doe.com',
  PORT: process.env.PORT ?? '5000',
};

export default config;
