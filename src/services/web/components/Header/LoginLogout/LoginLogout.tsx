import React from 'react';
import { Button, Link } from '@fredrikkadolfsson/ui';
import { useApolloClient, useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import useIsUserAuthenticated from '../../../hooks/useIsUserAuthenticated';
import config from '../../../config';
import { Unauthenticate } from '../../../types/Unauthenticate';

const UNAUTHENTICATE = gql`
  mutation Unauthenticate {
    unauthenticate
  }
`;

const LoginLogout = (): JSX.Element => {
  const client = useApolloClient();
  const [unauthenticate] = useMutation<Unauthenticate>(UNAUTHENTICATE);

  const isUserAuthenticated = useIsUserAuthenticated();
  const onLogout = React.useCallback(async () => {
    const { data } = await unauthenticate();
    client.writeData({
      data: {
        [config.JWT_EXISTS_APOLLO_CACHE_NAME]: data && !data.unauthenticate,
      },
    });
    client.resetStore();
  }, []);

  if (isUserAuthenticated) {
    return <Button onClick={onLogout}>Logga ut</Button>;
  }

  return <Link href="/login">Logga in</Link>;
};

export default LoginLogout;
