import express from 'express';
import config from './config';
import getUser from './endpoints/getUser';

const app = express();

app.get('/user', getUser);

app.listen({ port: config.PORT }, () => {
  console.log(`🚀 Server ready at http://localhost:${config.PORT}`);
});
