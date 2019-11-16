import { User as UserType } from '../../apis/account';

const User = {
  User: {
    email: (user: UserType): string => user.email,
    id: (user: UserType): string => user.id,
  },
};

export default User;
