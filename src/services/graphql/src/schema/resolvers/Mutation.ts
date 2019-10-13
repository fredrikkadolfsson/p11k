import { ExpressContext } from 'apollo-server-express/dist/ApolloServer';
import { setAuthenticationCookie } from '../../lib/authentication';

const Mutation = {
  Mutation: {
    authenticate: (
      _: unknown,
      { email, password }: { email: string; password: string },
      ctx: ExpressContext,
    ): boolean => {
      setAuthenticationCookie('authenticated', ctx);
      return email === 'john@doe.com' && password === 'test1234';
    },
  },
};

export default Mutation;
