import express from 'express';
import bodyParser from 'body-parser';
import config from './config';
import getUser from './endpoints/getUser';
import authenticateUser from './endpoints/authenticateUser';

const app = express();
app.use(bodyParser.json());

app.get('/user', getUser);
app.post('/user/authenticate', authenticateUser);

app.listen({ port: config.PORT }, () => {
  console.log(`🚀 Server ready at http://localhost:${config.PORT}`);
});
