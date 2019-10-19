import { AuthenticationError } from 'apollo-server-core';
import config from '../config';
import { Context } from '../typings';

export const setAuthenticationCookie = (token: string, { res }: Context): void => {
  res.cookie(config.JWT_COOKIE_NAME, token, {
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24 * 365,
    secure: process.env.NODE_ENV !== 'development',
  });
};

export const unsetAuthenticationCookie = ({ res }: Context): void => {
  res.clearCookie(config.JWT_COOKIE_NAME);
};

export const assertAuthentication = (jwt = ''): void => {
  if (!jwt) {
    throw new AuthenticationError('You are not authenticated or have been unauthenticated');
  }
};
