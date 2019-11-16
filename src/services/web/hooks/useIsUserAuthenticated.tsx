import gql from 'graphql-tag';
import { useIsUserAuthenticatedQuery } from '../generated/graphql';

gql`
  query isUserAuthenticated {
    user {
      id
    }
  }
`;

const useIsUserAuthenticated = (): boolean => {
  const { data } = useIsUserAuthenticatedQuery();
  return Boolean(data?.user.id);
};

export default useIsUserAuthenticated;
