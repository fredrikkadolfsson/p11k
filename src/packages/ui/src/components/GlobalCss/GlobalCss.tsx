import React from 'react';
import { Global, css } from '@emotion/core';
import { CssBaseline } from '@material-ui/core';

const GlobalStyle = css`
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
    margin: 10px;
  }
`;

const GlobalCss = (): JSX.Element => (
  <>
    <CssBaseline />
    <Global styles={GlobalStyle} />
  </>
);

export default GlobalCss;
