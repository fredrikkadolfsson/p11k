import React, { ReactElement } from 'react';
import Document, { Head, Main, NextScript, DocumentContext } from 'next/document';
import { RenderPageResult, DocumentInitialProps } from 'next/dist/next-server/lib/utils';
import { ServerStyleSheets } from '@material-ui/styles';
import { StylesProviderProps } from '@material-ui/styles/StylesProvider';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const sheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = (): RenderPageResult | Promise<RenderPageResult> =>
      originalRenderPage({
        enhanceApp: (App) => (props): React.ReactElement<StylesProviderProps> => sheets.collect(<App {...props} />),
      });

    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: [
        <React.Fragment key="styles">
          {initialProps.styles}
          {sheets.getStyleElement()}
        </React.Fragment>,
      ],
    };
  }

  render(): ReactElement {
    return (
      <html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default MyDocument;
