import { ApolloServer } from 'apollo-server-express';
import { ExpressContext } from 'apollo-server-express/dist/ApolloServer';
import express from 'express';
import cookieParser from 'cookie-parser';
import config from './config';
import schema from './schema';

const server = new ApolloServer({
  context: (ctx): ExpressContext => ctx,
  playground: config.ENABLE_PLAYGROUND,
  schema,
  tracing: config.ENABLE_TRACING,
});

const app = express();
app.use(cookieParser());

server.applyMiddleware({
  app,
  cors: {
    credentials: true,
    origin: 'http://localhost:3000',
  },
});

app.listen({ port: config.PORT }, () => {
  console.log(`🚀 Server ready at http://localhost:${config.PORT}${server.graphqlPath}`);
});
