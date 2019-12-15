import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container } from '@fredrikkadolfsson/ui';
import { InitialProps } from '../typings';

const About = (): JSX.Element => {
  const { t } = useTranslation('about');

  return (
    <Container>
      <h1>{t('title', 'About us!')}</h1>
    </Container>
  );
};

About.getInitialProps = (): InitialProps => ({
  namespacesRequired: ['about', 'common'],
});

export default About;
