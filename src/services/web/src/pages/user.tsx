import React from 'react';
import gql from 'graphql-tag';
import { useTranslation } from 'react-i18next';
import { Container } from '@fredrikkadolfsson/ui';
import { useUserQuery } from '../generated/graphql';

gql`
  query user {
    user {
      id
      email
    }
  }
`;

const User = (): JSX.Element => {
  const { t } = useTranslation('user');
  const { data } = useUserQuery();

  return (
    <Container>
      <h1>{t('title', 'User')}</h1>
      {data !== undefined && (
        <p>
          {data.user.id} {data.user.email}
        </p>
      )}
    </Container>
  );
};

User.getInitialProps = (): { namespacesRequired: string[] } => ({
  namespacesRequired: ['user', 'common'],
});

export default React.memo(User);
