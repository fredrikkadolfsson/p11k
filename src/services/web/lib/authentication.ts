import cookie from 'cookie';
import { ApolloClient } from 'apollo-boost';
import config from '../config';

const getValueFromCookie = (dough: string): boolean => {
  const cookies = cookie.parse(dough);
  const jwt: string = cookies[config.JWT_COOKIE_NAME];
  return Boolean(jwt);
};

export const setAutenticationStatus = (value: boolean | string | undefined, client: ApolloClient<unknown>): void => {
  client.writeData({
    data: {
      [config.JWT_EXISTS_APOLLO_CACHE_NAME]: typeof value === 'string' ? getValueFromCookie(value) : Boolean(value),
    },
  });
};
