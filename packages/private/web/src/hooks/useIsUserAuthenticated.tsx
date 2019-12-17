import { useIsUserAuthenticatedQuery } from '../generated/graphql';

const useIsUserAuthenticated = (): boolean => {
  const { data } = useIsUserAuthenticatedQuery({ fetchPolicy: 'cache-and-network' });
  return Boolean(data?.authentication.isAuthenticated);
};

export default useIsUserAuthenticated;
