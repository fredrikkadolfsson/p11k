import { ExpressContext } from 'apollo-server-express/dist/ApolloServer';
import { DataLoaders } from './lib/dataLoaders';

export interface Context extends ExpressContext {
  dataLoaders: DataLoaders;
  jwt?: string;
}

export interface Error {
  code: number;
  info: string;
}
