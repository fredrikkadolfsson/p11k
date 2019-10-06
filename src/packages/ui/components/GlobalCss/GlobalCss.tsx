import React from 'react';
import '@emotion/core';
import '@material-ui/core';
import { Global, css } from '@emotion/core';
import { CssBaseline } from '@material-ui/core';

const GlobalStyle = css``;

const GlobalCss = (): JSX.Element => {
  return (
    <>
      <CssBaseline />
      <Global styles={GlobalStyle} />
    </>
  );
};

export default GlobalCss;
