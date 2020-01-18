import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container } from '@fredrikkadolfsson/ui';
import Hero from '../components/Hero/Hero';
import { InitialProps } from '../typings';

const Index = (): JSX.Element => {
  const { t } = useTranslation('index');

  return (
    <>
      <Hero />
      <Container>
        <h1>{t('title', 'Welcome!')}</h1>
        <p>
          {t(
            'hero_description',
            'Nam in risus non erat aliquet egestas. Cras non odio sagittis lectus vehicula tristique. Nunc pellentesque lorem mauris, ut bibendum lacus dapibus at. Donec finibus nulla nec tortor aliquet ultricies. Sed lorem ante, efficitur eu pretium a, efficitur vitae nulla. Sed sed felis a nulla tempus facilisis. Nulla libero eros, iaculis eget lectus nec, rhoncus ullamcorper lacus.',
          )}
        </p>
      </Container>
    </>
  );
};

Index.getInitialProps = (): InitialProps => ({
  namespacesRequired: ['index', 'common'],
});

export default Index;
