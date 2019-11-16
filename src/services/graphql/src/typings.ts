import { ExpressContext } from 'apollo-server-express/dist/ApolloServer';

export interface Context extends ExpressContext {
  jwt?: string;
}
