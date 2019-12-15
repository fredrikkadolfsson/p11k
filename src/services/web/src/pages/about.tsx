import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container } from '@fredrikkadolfsson/ui';

const About = (): JSX.Element => {
  const { t } = useTranslation('about');

  return (
    <Container>
      <h1>{t('title', 'About us!')}</h1>
    </Container>
  );
};

About.getInitialProps = (): { namespacesRequired: string[] } => ({
  namespacesRequired: ['about', 'common'],
});

export default React.memo(About);
