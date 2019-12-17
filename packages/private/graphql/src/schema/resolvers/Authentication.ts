import { AuthenticationResolvers } from '../../generated/graphql';

const Authentication: { Authentication: AuthenticationResolvers } = {
  Authentication: {
    id: (): string => 'static_1',
    isAuthenticated: (token: string): boolean => Boolean(token),
    token: (token: string): string => token,
  },
};

export default Authentication;
