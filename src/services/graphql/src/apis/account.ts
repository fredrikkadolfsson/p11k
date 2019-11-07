import axios from 'axios';
import config from '../config';

export type userType = {
  email: string;
  id: string;
};

export const createUser = async (data: {
  email: string;
  password: string;
  passwordConfirm: string;
}): Promise<userType & { token: string }> => {
  const resp = await axios.put(`${config.ACCOUNT_URL}/user`, data);

  return resp.data;
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
