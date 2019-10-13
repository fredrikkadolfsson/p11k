import { ApolloServer } from 'apollo-server-express';
import { ExpressContext } from 'apollo-server-express/dist/ApolloServer';
import express from 'express';
import config from './config';
import schema from './schema';

const server = new ApolloServer({
  context: (ctx): ExpressContext => ctx,
  playground: config.ENABLE_PLAYGROUND,
  schema,
  tracing: config.ENABLE_TRACING,
});

const app = express();

server.applyMiddleware({
  app,
  cors: {
    credentials: true,
    origin: 'http://localhost:3000',
  },
});

app.listen({ port: 4000 }, () => {
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
});
