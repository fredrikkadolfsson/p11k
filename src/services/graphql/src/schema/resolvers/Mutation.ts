import { ApolloError } from 'apollo-server-core';
import { assertAuthentication, setAuthenticationCookie, unsetAuthenticationCookie } from '../../lib/authentication';
import { User } from '../../apis/account';
import { Context } from '../../typings';

const Mutation = {
  Mutation: {
    authenticate: async (_: unknown, args: { email: string; password: string }, ctx: Context): Promise<string> => {
      try {
        const token = await ctx.dataLoaders.jwtLoader.load(args);
        setAuthenticationCookie(token, ctx);
        return token;
      } catch (error) {
        console.error('Authentication failed', error);
        throw new ApolloError('Faild to authenticate user');
      }
    },

    createAccount: async (
      _: unknown,
      args: { email: string; password: string; passwordConfirm: string },
      ctx: Context,
    ): Promise<User> => {
      try {
        const data = await ctx.dataLoaders.userCreateLoader.load(args);
        setAuthenticationCookie(data.token, ctx);
        return data;
      } catch (error) {
        console.error('Authentication failed', error);
        throw new ApolloError('Faild to create user account');
      }
    },

    unauthenticate: (_: unknown, __: unknown, ctx: Context): string => {
      assertAuthentication(ctx.jwt);

      try {
        unsetAuthenticationCookie(ctx);
        return '';
      } catch (error) {
        console.error('Sign out failed', error);
        throw new ApolloError('Faild to unauthenticate user');
      }
    },
  },
};

export default Mutation;
