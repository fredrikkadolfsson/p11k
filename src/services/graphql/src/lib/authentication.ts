import { ExpressContext } from 'apollo-server-express/dist/ApolloServer';
import config from '../config';

export const setAuthenticationCookie = (token: string, { res }: ExpressContext): void => {
  res.cookie(config.JWT_COOKIE_NAME, token, {
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24 * 365,
    secure: process.env.NODE_ENV !== 'development',
  });
};

export const unsetAuthenticationCookie = ({ res }: ExpressContext): void => {
  res.clearCookie(config.JWT_COOKIE_NAME);
};
