import { ExpressContext } from 'apollo-server-express/dist/ApolloServer';

const Mutation = {
  Mutation: {
    authenticate: (
      _: unknown,
      { email, password }: { email: string; password: string },
      { res, req }: ExpressContext,
    ): boolean => {
      res.cookie('TEST', req.cookies.TEST !== '' ? '' : 'WORKS!!!', {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 365,
        secure: process.env.NODE_ENV !== 'development',
      });
      return email === 'john@doe.com' && password === 'test1234';
    },
  },
};

export default Mutation;
