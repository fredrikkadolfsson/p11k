import React from 'react';
import { Global, css } from '@emotion/core';
import { CssBaseline } from '@material-ui/core';
import { useTheme } from 'emotion-theming';
import { Theme } from '../ThemeProvider';

const GlobalCss = (): JSX.Element => {
  const theme = useTheme<Theme>();

  const GlobalStyle = React.useMemo(
    () => css`
      * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
      }

      html,
      body {
        height: 100%;
      }

      #__next {
        display: flex;
        height: 100%;
        flex-direction: column;
      }

      p {
        margin-top: ${theme.sizes.xxsmall};
        margin-bottom: ${theme.sizes.xxsmall};
      }

      form {
        display: flex;
        width: 100%;
        max-width: ${theme.widths.xsmall};
        flex-direction: column;

        p {
          text-align: center;

          a {
            font-weight: 500;
          }
        }
      }
    `,
    [theme.sizes.xxsmall],
  );

  return (
    <>
      <CssBaseline />
      <Global styles={GlobalStyle} />
    </>
  );
};

export default GlobalCss;
