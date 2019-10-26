import axios from 'axios';
import config from '../config';

export type userType = {
  firstName: string;
  id: string;
  lastName: string;
};

export const getUser = async (jwt: string): Promise<userType> => {
  const resp = await axios.get(`${config.ACCOUNT_URL}/user`, {
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
      authorization: jwt,
    },
  });

  return resp.data;
};

export const getJwtToken = (email: string, password: string): string => email + password;
