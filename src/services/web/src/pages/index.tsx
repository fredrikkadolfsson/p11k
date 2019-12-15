import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container } from '@fredrikkadolfsson/ui';
import { InitialProps } from '../typings';

const Index = (): JSX.Element => {
  const { t } = useTranslation('index');

  return (
    <Container>
      <h1>{t('title', 'Welcome!')}</h1>
    </Container>
  );
};

Index.getInitialProps = (): InitialProps => ({
  namespacesRequired: ['index', 'common'],
});

export default Index;
