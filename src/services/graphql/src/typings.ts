import { ExpressContext } from 'apollo-server-express/dist/ApolloServer';

export type Context = ExpressContext & {
  jwt?: string;
};
