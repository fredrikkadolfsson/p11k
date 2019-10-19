import { AuthenticationError } from 'apollo-server-core';
import { Context } from '../../typings';

const Query = {
  Query: {
    user: (_: unknown, __: unknown, { jwt }: Context): {} => {
      if (!jwt) {
        throw new AuthenticationError('You are not authenticated or have been unauthenticated');
      }

      return {};
    },
  },
};

export default Query;
