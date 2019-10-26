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
    ): Promise<boolean> => {
      try {
        const token = await getJwtToken({ email, password });
        setAuthenticationCookie(token, ctx);
        return true;
      } catch (error) {
        console.error('Authentication failed', error);
        throw new ApolloError('Faild to authenticate user');
      }
    },

    unauthenticate: (_: unknown, __: unknown, ctx: Context): boolean => {
      assertAuthentication(ctx.jwt);

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
