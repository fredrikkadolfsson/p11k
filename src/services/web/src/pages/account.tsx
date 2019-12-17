import React from 'react';
import gql from 'graphql-tag';
import { useTranslation } from 'react-i18next';
import { Container } from '@fredrikkadolfsson/ui';
import { useUserQuery } from '../generated/graphql';
import { InitialProps, InitialPropsProps } from '../typings';
import { redirectUnAuthenticated } from '../lib/redirects';

gql`
  query user {
    user {
      id
      email
    }
  }
`;

const Account = (): JSX.Element => {
  const { t } = useTranslation('account');
  const { data } = useUserQuery();

  return (
    <Container>
      <h1>{t('title', 'Account')}</h1>
      {data !== undefined && (
        <p>
          {data.user.id} {data.user.email}
        </p>
      )}
    </Container>
  );
};

Account.getInitialProps = async (props: InitialPropsProps): Promise<InitialProps> => {
  await redirectUnAuthenticated(props);

  return {
    namespacesRequired: ['account', 'common'],
  };
};

export default Account;
