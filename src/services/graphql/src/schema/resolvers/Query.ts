import { Context } from '../../typings';
import { assertAuthentication } from '../../lib/authentication';
import { User } from '../../apis/account';

const Query = {
  Query: {
    isAuthenticated: (_: unknown, __: unknown, { jwt = '' }: Context): boolean => Boolean(jwt),
    user: async (_: unknown, __: unknown, { jwt = '', dataLoaders }: Context): Promise<User> => {
      assertAuthentication(jwt);
      return dataLoaders.userLoader.load(jwt);
    },
  },
};

export default Query;
