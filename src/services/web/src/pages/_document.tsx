import React from 'react';
import Document, { DocumentContext, Head, Main, NextScript } from 'next/document';
import {
  AppContextType,
  AppInitialProps,
  AppPropsType,
  DocumentInitialProps,
  NextComponentType,
  RenderPageResult,
} from 'next/dist/next-server/lib/utils';
import { ServerStyleSheets } from '@material-ui/styles';
import { StylesProviderProps } from '@material-ui/styles/StylesProvider';

class MyDocument extends Document {
  public static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const sheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = (): RenderPageResult | Promise<RenderPageResult> =>
      originalRenderPage({
        enhanceApp: (App: NextComponentType<AppContextType, AppInitialProps, AppPropsType>) => (
          props: React.PropsWithChildren<AppPropsType>,
        ): React.ReactElement<StylesProviderProps> => sheets.collect(<App {...props} />),
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

  public render(): JSX.Element {
    return (
      <html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no" />
          <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=swap" rel="stylesheet" />
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
