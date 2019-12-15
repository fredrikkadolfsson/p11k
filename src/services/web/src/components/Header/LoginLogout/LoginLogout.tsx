import React from 'react';
import { Button, Link } from '@fredrikkadolfsson/ui';
import { useApolloClient } from '@apollo/react-hooks';
import { useTranslation } from 'react-i18next';
import gql from 'graphql-tag';
import { useRouter } from 'next/router';
import useIsUserAuthenticated from '../../../hooks/useIsUserAuthenticated';
import { useUnauthenticateMutation } from '../../../generated/graphql';

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
    await router.push('/');
    await client.resetStore();
  }, []);

  if (isUserAuthenticated) {
    return <Button onClick={onLogout}>{t('sign_out', 'Sign out')}</Button>;
  }

  return <Link href="/login">{t('sign_in', 'Sign in')}</Link>;
};

export default LoginLogout;
