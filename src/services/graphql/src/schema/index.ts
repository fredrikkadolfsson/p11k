import { makeExecutableSchema } from 'graphql-tools';
import * as typeDefs from './typeDefs';
import * as resolvers from './resolvers';

export default makeExecutableSchema({
  resolvers: Object.values(resolvers),
  typeDefs: Object.values(typeDefs),
});
