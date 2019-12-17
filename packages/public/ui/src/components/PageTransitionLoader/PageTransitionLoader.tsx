import React from 'react';
import NProgress from 'nprogress';
import { Global, css } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import { Theme } from '../ThemeProvider';

NProgress.configure({ showSpinner: false });

interface PageTransitionLoaderProps {
  Router: {
    events: { on: unknown };
  };
}

const PageTransitionLoader = ({ Router }: PageTransitionLoaderProps): JSX.Element => {
  const theme = useTheme<Theme>();

  React.useEffect(() => {
    if (typeof Router.events.on === 'function') {
      Router.events.on('routeChangeStart', () => NProgress.start());
      Router.events.on('routeChangeComplete', () => NProgress.done());
      Router.events.on('routeChangeError', () => NProgress.done());
    }
  }, []);

  const GlobalStyle = React.useMemo(
    () => css`
      #nprogress {
        pointer-events: none;

        .bar {
          position: fixed;
          z-index: 1131;
          top: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: ${theme.palette.secondary.main};
        }

        .peg {
          position: absolute;
          right: 0;
          display: block;
          width: 100px;
          height: 100%;
          box-shadow: 0 0 10px ${theme.palette.secondary.main}, 0 0 5px ${theme.palette.secondary.main};
          opacity: 1;
          transform: rotate(3deg) translate(0, -4px);
        }
      }
    `,
    [theme.palette.secondary.main],
  );

  return <Global styles={GlobalStyle} />;
};

export default PageTransitionLoader;
