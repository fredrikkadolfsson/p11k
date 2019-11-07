import '@emotion/core';
import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import styled, { GlobalCss, ThemeProvider } from '@fredrikkadolfsson/ui';
import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient } from 'apollo-boost';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import withApollo from '../lib/withApollo';

type AppProps = {
  apollo: ApolloClient<{}>;
};

const StyledMain = styled.main`
  flex-grow: 1;
`;

class MyApp extends App<AppProps> {
  componentDidMount(): void {
    const jssStyles = document.querySelector('#jss-server-side'); // eslint-disable-line no-undef
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render(): JSX.Element {
    const { apollo, Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>Perfect Stack</title>
        </Head>
        <ApolloProvider client={apollo}>
          <ThemeProvider>
            <GlobalCss />
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

export default withApollo(MyApp);
