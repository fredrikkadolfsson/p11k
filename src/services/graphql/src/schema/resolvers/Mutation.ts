import { ExpressContext } from 'apollo-server-express/dist/ApolloServer';
import { ApolloError, AuthenticationError } from 'apollo-server-core';
import { setAuthenticationCookie, unsetAuthenticationCookie } from '../../lib/authentication';
import { getJwtToken } from '../../apis/account';

const Mutation = {
  Mutation: {
    authenticate: (
      _: unknown,
      { email, password }: { email: string; password: string },
      ctx: ExpressContext,
    ): boolean => {
      try {
        const token = getJwtToken(email, password);
        setAuthenticationCookie(token, ctx);
        return true;
      } catch (error) {
        console.error('Authentication failed', error);
        throw new AuthenticationError('Faild to authenticate user');
      }
    },

    signOut: (_: unknown, __: unknown, ctx: ExpressContext): boolean => {
      try {
        unsetAuthenticationCookie(ctx);
        return true;
      } catch (error) {
        console.error('Sign out failed', error);
        throw new ApolloError('Faild to authenticate user');
      }
    },
  },
};

export default Mutation;
