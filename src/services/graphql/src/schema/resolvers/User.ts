import { userType } from '../../apis/account';

const User = {
  User: {
    email: (user: userType): string => user.email,
    id: (user: userType): string => user.id,
  },
};

export default User;
