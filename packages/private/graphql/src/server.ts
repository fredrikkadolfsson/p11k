import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import cookieParser from 'cookie-parser';
import { ExpressContext } from 'apollo-server-express/dist/ApolloServer';
import config from './config';
import schema from './schema';
import { Context } from './typings';
import dataLoaders from './lib/dataLoaders';

const server = new ApolloServer({
  context: (ctx: ExpressContext): Context => {
    const jwt = ctx.req.cookies[config.JWT_COOKIE_NAME] ?? ctx.req.headers.authorization;
    return {
      dataLoaders,
      jwt,
      ...ctx,
    };
  },
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
