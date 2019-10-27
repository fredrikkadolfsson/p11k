import express from 'express';
import bodyParser from 'body-parser';
import config from './config';
import getUser from './endpoints/getUser';
import authenticateUser from './endpoints/authenticateUser';
import connectDB from './utils/db/connect';

(async (): Promise<void> => {
  const app = express();
  app.use(bodyParser.json());

  app.get('/user', getUser);
  app.post('/user/authenticate', authenticateUser);

  await connectDB();

  app.listen({ port: config.PORT }, () => {
    console.log(`🚀 Server ready at http://localhost:${config.PORT}`);
  });
})();
