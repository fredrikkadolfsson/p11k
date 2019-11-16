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
        margin: 0px;
        padding: 0px;
      }

      html,
      body {
        height: 100%;
      }

      #__next {
        display: flex;
        flex-direction: column;
        height: 100%;
      }

      p {
        margin-bottom: ${theme.sizes.xxsmall};
        margin-top: ${theme.sizes.xxsmall};
      }

      form {
        display: flex;
        flex-direction: column;
        max-width: ${theme.widths.xsmall};
        width: 100%;

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
