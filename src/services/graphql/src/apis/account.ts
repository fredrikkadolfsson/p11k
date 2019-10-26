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
      authorization: jwt,
    },
  });

  return resp.data;
};

export const getJwtToken = async (data: { email: string; password: string }): Promise<string> => {
  const resp = await axios.post(`${config.ACCOUNT_URL}/user/authenticate`, data);

  return resp.data;
};
