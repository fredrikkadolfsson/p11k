import '@emotion/core';
import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { GlobalCss, ThemeProvider } from '@fredrikkadolfsson/ui';
import Header from '../components/Header/Header';

export default class MyApp extends App {
  componentDidMount(): void {
    const jssStyles = document.querySelector('#jss-server-side');
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
          <main>
            <Component {...pageProps} />
          </main>
        </ThemeProvider>
      </React.StrictMode>
    );
  }
}
