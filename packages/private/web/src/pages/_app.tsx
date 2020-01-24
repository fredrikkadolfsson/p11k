import '@emotion/core';
import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import styled, { GlobalCss, NoScript, PageTransitionLoader, ThemeProvider } from '@fredrikkadolfsson/ui';
import { ApolloProvider } from '@apollo/react-hooks';
import { Router } from 'next/router';
import { WithApolloProps } from 'next-with-apollo';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import withApollo from '../lib/withApollo';
import { appWithTranslation } from '../lib/i18n';

const StyledMain = styled.main`
  flex-grow: 1;
`;

class MyApp extends App<WithApolloProps<{}>> {
  public componentDidMount(): void {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles?.parentNode !== null && jssStyles?.parentNode !== undefined) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  public render(): JSX.Element {
    const { apollo, Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>Perfect Stack</title>
        </Head>
        <ApolloProvider client={apollo}>
          <ThemeProvider>
            <GlobalCss />
            <PageTransitionLoader Router={Router} />
            <NoScript>Your browser does not support JavaScript!</NoScript>
            <Header />
            <StyledMain>
              <Component {...pageProps} />
            </StyledMain>
            <Footer />
          </ThemeProvider>
        </ApolloProvider>
      </>
    );
  }
}

export default withApollo(appWithTranslation(MyApp));
