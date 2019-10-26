import { Context } from '../../typings';
import { assertAuthentication } from '../../lib/authentication';
import { getUser, userType } from '../../apis/account';

const Query = {
  Query: {
    user: (_: unknown, __: unknown, { jwt = '' }: Context): Promise<userType> => {
      assertAuthentication(jwt);
      return getUser(jwt);
    },
  },
};

export default Query;
