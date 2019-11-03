import { ApolloError } from 'apollo-server-core';
import { assertAuthentication, setAuthenticationCookie, unsetAuthenticationCookie } from '../../lib/authentication';
import { getJwtToken } from '../../apis/account';
import { Context } from '../../typings';

const Mutation = {
  Mutation: {
    authenticate: async (
      _: unknown,
      { email, password }: { email: string; password: string },
      ctx: Context,
    ): Promise<string> => {
      try {
        const token = await getJwtToken({ email, password });
        setAuthenticationCookie(token, ctx);
        return token;
      } catch (error) {
        console.error('Authentication failed', error);
        throw new ApolloError('Faild to authenticate user', 'WRONG_OR_MISSING_CREDENTIALS');
      }
    },

    unauthenticate: (_: unknown, __: unknown, ctx: Context): boolean => {
      assertAuthentication(ctx.jwt);

      try {
        unsetAuthenticationCookie(ctx);
        return true;
      } catch (error) {
        console.error('Sign out failed', error);
        throw new ApolloError('Faild to unauthenticate user');
      }
    },
  },
};

export default Mutation;
