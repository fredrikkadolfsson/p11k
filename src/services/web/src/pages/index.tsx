import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container } from '@fredrikkadolfsson/ui';

const Index = (): JSX.Element => {
  const { t } = useTranslation('index');

  return (
    <Container>
      <h1>{t('title', 'Welcome!')}</h1>
    </Container>
  );
};

Index.getInitialProps = async (): Promise<{ namespacesRequired: string[] }> => {
  await Promise.resolve();

  return {
    namespacesRequired: ['index', 'common'],
  };
};

export default React.memo(Index);
