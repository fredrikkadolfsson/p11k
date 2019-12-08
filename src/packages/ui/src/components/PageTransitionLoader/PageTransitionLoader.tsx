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
          background: ${theme.palette.secondary.main};
          height: 2px;
          left: 0;
          position: fixed;
          top: 0;
          width: 100%;
          z-index: 1131;
        }

        .peg {
          box-shadow: 0 0 10px ${theme.palette.secondary.main}, 0 0 5px ${theme.palette.secondary.main};
          display: block;
          height: 100%;
          opacity: 1;
          position: absolute;
          right: 0px;
          transform: rotate(3deg) translate(0px, -4px);
          width: 100px;
        }
      }
    `,
    [theme.palette.secondary.main],
  );

  return <Global styles={GlobalStyle} />;
};

export default PageTransitionLoader;
