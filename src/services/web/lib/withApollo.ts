import withApollo from 'next-with-apollo';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import config from '../config';
import { setAutenticationStatus } from './authentication';

export default withApollo(
  ({ initialState = {}, headers }) => {
    const client = new ApolloClient({
      cache: new InMemoryCache().restore(initialState),
      credentials: process.env.NODE_ENV === 'development' ? 'include' : 'same-origin',
      headers,
      uri: config.GRAPHQL_URL,
    });

    if (headers) {
      setAutenticationStatus(headers.cookie, client);
    }

    return client;
  },
  {
    getDataFromTree: 'ssr',
  },
);
