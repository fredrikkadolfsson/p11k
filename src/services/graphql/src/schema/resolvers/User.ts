import { userType } from '../../apis/account';

const User = {
  User: {
    firstName: (user: userType): string => user.firstName,
    id: (user: userType): string => user.id,
    lastName: (user: userType): string => user.lastName,
  },
};

export default User;
