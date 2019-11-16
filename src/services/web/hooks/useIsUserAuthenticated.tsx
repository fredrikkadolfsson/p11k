import gql from 'graphql-tag';
import { useIsUserAuthenticatedQuery } from '../generated/graphql';

gql`
  query isUserAuthenticated {
    isAuthenticated
  }
`;

const useIsUserAuthenticated = (): boolean => {
  const { data } = useIsUserAuthenticatedQuery();
  return Boolean(data?.isAuthenticated);
};

export default useIsUserAuthenticated;
