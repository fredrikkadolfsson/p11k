import { Context } from '../../typings';
import { assertAuthentication } from '../../lib/authentication';
import { User, getUser } from '../../apis/account';

const Query = {
  Query: {
    isAuthenticated: (_: unknown, __: unknown, { jwt = '' }: Context): boolean => Boolean(jwt),
    user: async (_: unknown, __: unknown, { jwt = '' }: Context): Promise<User> => {
      assertAuthentication(jwt);
      return getUser(jwt);
    },
  },
};

export default Query;
