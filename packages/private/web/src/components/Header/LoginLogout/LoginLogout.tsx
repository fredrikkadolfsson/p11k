import React from 'react';
import { Button } from '@fredrikkadolfsson/ui';
import { useTranslation } from 'react-i18next';
import gql from 'graphql-tag';
import { useRouter } from 'next/router';
import { useApolloClient } from '@apollo/react-hooks';
import useIsUserAuthenticated from '../../../hooks/useIsUserAuthenticated';
import { useUnauthenticateMutation } from '../../../generated/graphql';
import routes from '../../../routes';

gql`
  mutation unauthenticate {
    unauthenticate {
      id
      isAuthenticated
    }
  }
`;

const LoginLogout = (): JSX.Element => {
  const { t } = useTranslation('common');
  const router = useRouter();
  const client = useApolloClient();
  const [unauthenticate] = useUnauthenticateMutation();
  const isUserAuthenticated = useIsUserAuthenticated();

  const onLogout = React.useCallback(async () => {
    await unauthenticate();
    await router.push(routes.index);
    await client.resetStore();
  }, []);

  if (isUserAuthenticated) {
    return (
      <Button onClick={onLogout} color="inherit" variant="text">
        {t('sign_out', 'Sign out')}
      </Button>
    );
  }

  return (
    <Button href={routes.login} color="inherit" variant="text">
      {t('sign_in', 'Sign in')}
    </Button>
  );
};

export default LoginLogout;
