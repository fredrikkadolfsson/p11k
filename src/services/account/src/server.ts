import express from 'express';
import bodyParser from 'body-parser';
import config from './config';
import connectDB from './utils/db/connect';
import getUsers from './endpoints/getUsers';
import createUsers from './endpoints/createUsers';
import authenticateUsers from './endpoints/authenticateUsers';

Promise.resolve(
  (async (): Promise<void> => {
    const app = express();
    app.use(bodyParser.json());
    app.get('/users', getUsers);
    app.put('/users', createUsers);
    app.post('/users/authenticate', authenticateUsers);

    await connectDB();

    app.listen({ port: config.PORT }, () => {
      console.log(`🚀 Server ready at http://localhost:${config.PORT}`);
    });
  })(),
).catch(() => console.log('💥 Server failed'));
