import { ExpressContext } from 'apollo-server-express/dist/ApolloServer';

const Mutation = {
  Mutation: {
    authenticate: (
      _: unknown,
      { email, password }: { email: string; password: string },
      { res, req }: ExpressContext,
    ): boolean => {
      console.log(req.cookies);

      res.cookie('VARFÖR_FUNKAR_INTE_DETTA', 'false', { httpOnly: false, maxAge: 900000 });
      return email === 'john@doe.com' && password === 'test1234';
    },
  },
};

export default Mutation;
