import gql from 'graphql-tag';
import { useIsUserAuthenticatedQuery } from '../generated/graphql';

gql`
  query isUserAuthenticated {
    authentication {
      isAuthenticated
    }
  }
`;

const useIsUserAuthenticated = (): boolean => {
  const { data } = useIsUserAuthenticatedQuery({ fetchPolicy: 'cache-and-network' });
  return Boolean(data?.authentication.isAuthenticated);
};

export default useIsUserAuthenticated;
