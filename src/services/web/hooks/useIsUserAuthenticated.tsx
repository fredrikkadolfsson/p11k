import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import config from '../config';

/* eslint-disable graphql/template-strings */
const IS_USER_AUTHENTICATED = gql`
  query ${config.JWT_EXISTS_APOLLO_CACHE_NAME} {
    ${config.JWT_EXISTS_APOLLO_CACHE_NAME}
  }
`;
/* eslint-enable graphql/template-strings */

const useIsUserAuthenticated = (): boolean => {
  const { data } = useQuery(IS_USER_AUTHENTICATED, { fetchPolicy: 'cache-only' });
  return Boolean(data && data[config.JWT_EXISTS_APOLLO_CACHE_NAME]);
};

export default useIsUserAuthenticated;
