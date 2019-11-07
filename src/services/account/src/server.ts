import express from 'express';
import bodyParser from 'body-parser';
import config from './config';
import connectDB from './utils/db/connect';
import getUser from './endpoints/getUser';
import createUser from './endpoints/createUser';
import authenticateUser from './endpoints/authenticateUser';

(async (): Promise<void> => {
  const app = express();
  app.use(bodyParser.json());

  app.get('/user', getUser);
  app.put('/user', createUser);
  app.post('/user/authenticate', authenticateUser);

  await connectDB();

  app.listen({ port: config.PORT }, () => {
    console.log(`🚀 Server ready at http://localhost:${config.PORT}`);
  });
})();
