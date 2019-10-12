import { ApolloServer } from 'apollo-server';
import config from './config';
import schema from './schema';

const server = new ApolloServer({
  playground: config.ENABLE_PLAYGROUND,
  schema,
  tracing: config.ENABLE_TRACING,
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
