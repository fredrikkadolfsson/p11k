import React from 'react';
import { Container } from '@fredrikkadolfsson/ui';
import { useTranslation } from 'react-i18next';

const Index = (): JSX.Element => {
  const { t } = useTranslation('index');
  return (
    <Container>
      <h1>{t('welcome', 'Welcome!')}</h1>
    </Container>
  );
};

export default React.memo(Index);
