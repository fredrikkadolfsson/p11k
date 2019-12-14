import React from 'react';
import { Container } from '@fredrikkadolfsson/ui';
import { useTranslation } from 'react-i18next';

const About = (): JSX.Element => {
  const { t } = useTranslation('about');

  return (
    <Container>
      <h1>{t('About', 'About us!')}</h1>
    </Container>
  );
};

export default React.memo(About);
