import { gql } from 'apollo-boost';
import { InitialPropsProps } from '../typings';
import { IsUserAuthenticatedQuery } from '../generated/graphql';

const query = gql`
  query isUserAuthenticated {
    authentication {
      id
      isAuthenticated
    }
  }
`;

const redirectAuthenticated = async ({ res, apolloClient }: InitialPropsProps, path?: string): Promise<void> => {
  const {
    data: {
      authentication: { isAuthenticated },
    },
  } = await apolloClient.query<IsUserAuthenticatedQuery>({
    query,
  });

  if (isAuthenticated && res) {
    res.writeHead(302, {
      Location: path ?? '/',
    });
    res.end();
  }
};

export default redirectAuthenticated;
