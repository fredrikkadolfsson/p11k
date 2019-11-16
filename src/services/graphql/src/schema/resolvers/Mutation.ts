import { ApolloError } from 'apollo-server-core';
import { assertAuthentication, setAuthenticationCookie, unsetAuthenticationCookie } from '../../lib/authentication';
import { User, createUser, getJwtToken, getUser } from '../../apis/account';
import { Context } from '../../typings';

const Mutation = {
  Mutation: {
    authenticate: async (_: unknown, args: { email: string; password: string }, ctx: Context): Promise<User> => {
      try {
        const token = await getJwtToken(args);
        setAuthenticationCookie(token, ctx);
        return getUser(token);
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
        const user = await createUser(args);
        setAuthenticationCookie(user.token, ctx);
        return user;
      } catch (error) {
        console.error('Authentication failed', error);
        throw new ApolloError('Faild to create user account');
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
