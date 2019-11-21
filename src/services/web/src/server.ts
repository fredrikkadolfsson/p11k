import express, { Request, Response } from 'express';
import next from 'next';
import nextI18NextMiddleware from 'next-i18next/middleware';
import nextI18next from './lib/i18n';
import config from './config';

const app = next({ dev: config.NODE_ENV !== 'production' });
const handle = app.getRequestHandler();

Promise.resolve(
  // eslint-disable-next-line @typescript-eslint/require-await
  (async (): Promise<void> => {
    await app.prepare();
    const server = express();

    server
      .use(nextI18NextMiddleware(nextI18next))
      .get('*', async (req: Request, res: Response) => handle(req, res))
      .listen({ port: config.PORT }, () => {
        console.log(`> Ready on http://localhost:${config.PORT}`);
      });
  })(),
).catch(() => console.log('💥 Server failed'));
