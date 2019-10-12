import { ApolloServer, gql } from 'apollo-server';

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
  playground: true,
  resolvers,
  tracing: true,
  typeDefs,
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
