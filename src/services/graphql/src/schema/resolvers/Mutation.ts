import { ApolloError } from 'apollo-server-core';
import { setAuthenticationCookie, unsetAuthenticationCookie } from '../../lib/authentication';
import { getJwtToken } from '../../apis/account';
import { Context } from '../../typings';

const Mutation = {
  Mutation: {
    authenticate: (_: unknown, { email, password }: { email: string; password: string }, ctx: Context): boolean => {
      try {
        const token = getJwtToken(email, password);
        setAuthenticationCookie(token, ctx);
        return true;
      } catch (error) {
        console.error('Authentication failed', error);
        throw new ApolloError('Faild to authenticate user');
      }
    },

    unauthenticate: (_: unknown, __: unknown, ctx: Context): boolean => {
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
