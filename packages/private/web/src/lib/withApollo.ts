import withApollo, { InitApolloOptions } from 'next-with-apollo';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import config from '../config';

export default withApollo(
  (
    { initialState = {}, headers }: InitApolloOptions<any>, // eslint-disable-line @typescript-eslint/no-explicit-any
  ) =>
    new ApolloClient({
      cache: new InMemoryCache().restore(initialState),
      credentials: config.NODE_ENV === 'development' ? 'include' : 'same-origin',
      headers,
      uri: config.GRAPHQL_URL,
    }),
);
