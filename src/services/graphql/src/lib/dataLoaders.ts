import DataLoader from 'dataloader';
import { ApolloError } from 'apollo-server-express';
import {
  User,
  UserAuthentication,
  UserRegistration,
  UserWithToken,
  createUsers,
  getJwtTokens,
  getUsers,
} from '../apis/account';
import { Error } from '../typings';
import { isError } from './error';

export interface DataLoaders {
  jwtLoader: DataLoader<UserAuthentication, string>;
  userCreateLoader: DataLoader<UserRegistration, UserWithToken>;
  userLoader: DataLoader<string, User>;
}

const dataLoaders: DataLoaders = {
  jwtLoader: new DataLoader(
    async (tokens: UserAuthentication[]): Promise<string[]> => {
      const users = await getJwtTokens(tokens);

      return users.map((data: string | Error) => {
        if (isError(data)) {
          throw new ApolloError(data.info);
        }

        return data;
      });
    },
  ),
  userCreateLoader: new DataLoader(
    async (data: UserRegistration[]): Promise<UserWithToken[]> => {
      const users = await createUsers(data);

      return users.map((data: UserWithToken | Error) => {
        if (isError(data)) {
          throw new ApolloError(data.info);
        }

        return data;
      });
    },
    {
      cache: false,
    },
  ),
  userLoader: new DataLoader(
    async (tokens: string[]): Promise<User[]> => {
      const users = await getUsers(tokens);

      return users.map((data: User | Error) => {
        if (isError(data)) {
          throw new ApolloError(data.info);
        }

        return data;
      });
    },
  ),
};

export default dataLoaders;
