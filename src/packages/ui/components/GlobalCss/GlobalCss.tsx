import React, { ReactElement } from 'react';
import '@emotion/core';
import { Global, css } from '@emotion/core';
import { CssBaseline } from '@material-ui/core';

const GlobalStyle = css``;

const GlobalCss = (): ReactElement => {
  return (
    <>
      <CssBaseline />
      <Global styles={GlobalStyle} />
    </>
  );
};

export default GlobalCss;
