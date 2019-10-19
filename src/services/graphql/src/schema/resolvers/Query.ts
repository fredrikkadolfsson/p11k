import { Context } from '../../typings';
import { assertAuthentication } from '../../lib/authentication';

const Query = {
  Query: {
    user: (_: unknown, __: unknown, { jwt }: Context): {} => {
      assertAuthentication(jwt);

      return {};
    },
  },
};

export default Query;
