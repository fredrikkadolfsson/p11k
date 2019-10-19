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
