import React from 'react';
import { Button, Link } from '@fredrikkadolfsson/ui';
import { useApolloClient } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import useIsUserAuthenticated from '../../../hooks/useIsUserAuthenticated';
import { useUnauthenticateMutation } from '../../../generated/graphql';

gql`
  mutation unauthenticate {
    unauthenticate
  }
`;

const LoginLogout = (): JSX.Element => {
  const client = useApolloClient();
  const [unauthenticate] = useUnauthenticateMutation();
  const isUserAuthenticated = useIsUserAuthenticated();

  const onLogout = React.useCallback(async () => {
    await unauthenticate();
    await client.resetStore();
  }, []);

  if (isUserAuthenticated) {
    return <Button onClick={onLogout}>Logga ut</Button>;
  }

  return <Link href="/login">Logga in</Link>;
};

export default LoginLogout;
