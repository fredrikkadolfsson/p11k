import '@emotion/core';
import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import styled, { Container, GlobalCss, ThemeProvider } from '@fredrikkadolfsson/ui';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const StyledMain = styled.main`
  flex-grow: 1;
`;

export default class MyApp extends App {
  componentDidMount(): void {
    const jssStyles = document.querySelector('#jss-server-side'); // eslint-disable-line no-undef
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render(): JSX.Element {
    const { Component, pageProps } = this.props;

    return (
      <React.StrictMode>
        <Head>
          <title>Perfect Stack</title>
        </Head>
        <ThemeProvider>
          <GlobalCss />
          <Header />
          <StyledMain>
            <Container>
              <Component {...pageProps} />
            </Container>
          </StyledMain>
          <Footer />
        </ThemeProvider>
      </React.StrictMode>
    );
  }
}