import axios from 'axios';
import config from '../config';
import { Error } from '../typings';

export interface User {
  email: string;
  id: string;
}

export interface UserWithToken extends User {
  token: string;
}

export interface UserAuthentication {
  email: string;
  password: string;
}

export interface UserRegistration {
  email: string;
  password: string;
  passwordConfirm: string;
}

export const createUsers = async (data: UserRegistration[]): Promise<(UserWithToken | Error)[]> => {
  const resp = await axios.put<(UserWithToken | Error)[]>(`${config.ACCOUNT_URL}/users`, data);
  return resp.data;
};

export const getUsers = async (tokens: string[]): Promise<(User | Error)[]> => {
  const resp = await axios.get<(User | Error)[]>(`${config.ACCOUNT_URL}/users`, {
    params: {
      tokens,
    },
  });
  return resp.data;
};

export const getJwtTokens = async (data: UserAuthentication[]): Promise<(string | Error)[]> => {
  const resp = await axios.post<(string | Error)[]>(`${config.ACCOUNT_URL}/users/authenticate`, data);
  return resp.data;
};
