import React from 'react';
import { Global, css } from '@emotion/core';
import { CssBaseline } from '@material-ui/core';

const GlobalStyle = css`
  html,
  body,
  #__next {
    height: 100%;
  }

  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }
`;

const GlobalCss = (): JSX.Element => {
  return (
    <>
      <CssBaseline />
      <Global styles={GlobalStyle} />
    </>
  );
};

export default GlobalCss;
