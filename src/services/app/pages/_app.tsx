import React, { ReactElement } from 'react';
import App from 'next/app';
import Head from 'next/head';
import { GlobalCss } from '@fredrikkadolfsson/ui';

export default class MyApp extends App {
  componentDidMount(): void {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render(): ReactElement {
    const { Component, pageProps } = this.props;

    return (
      <React.StrictMode>
        <Head>
          <title>My page</title>
        </Head>
        <GlobalCss />
        <Component {...pageProps} />
      </React.StrictMode>
    );
  }
}
