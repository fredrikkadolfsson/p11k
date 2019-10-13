import withApollo from 'next-with-apollo';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import config from '../config';

export default withApollo(
  ({ initialState }) =>
    new ApolloClient({
      cache: new InMemoryCache().restore(initialState || {}),
      credentials: process.env.NODE_ENV === 'development' ? 'include' : 'same-origin',
      uri: config.GRAPHQL_URL,
    }),
  {
    getDataFromTree: 'ssr',
  },
);
