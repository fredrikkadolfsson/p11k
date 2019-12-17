import { User as UserType } from '../../apis/account';
import { UserResolvers } from '../../generated/graphql';

const User: { User: UserResolvers } = {
  User: {
    email: (user: UserType): string => user.email,
    id: (user: UserType): string => user.id,
  },
};

export default User;
