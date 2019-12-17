import { Context } from '../../typings';
import { assertAuthentication } from '../../lib/authentication';
import { User } from '../../apis/account';
import { QueryResolvers } from '../../generated/graphql';

const Query: { Query: QueryResolvers } = {
  Query: {
    authentication: (_: unknown, __: unknown, { jwt = '' }: Context): string => jwt,
    user: async (_: unknown, __: unknown, { jwt = '', dataLoaders }: Context): Promise<User> => {
      assertAuthentication(jwt);
      return dataLoaders.userLoader.load(jwt);
    },
  },
};

export default Query;
