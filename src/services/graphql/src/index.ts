import { ApolloServer, gql } from 'apollo-server';
import config from './config';

const typeDefs = gql`
  type Query {
    hello(name: String): String
  }
`;

const resolvers = {
  Query: {
    hello: (_: void, { name }: { name: string }): string => `Hello ${name || 'World!'}`,
  },
};

const server = new ApolloServer({
  playground: config.ENABLE_PLAYGROUND,
  resolvers,
  tracing: config.ENABLE_TRACING,
  typeDefs,
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
