import React, { PropsWithChildren } from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import Container from '../Container/Container';

const Header = ({ children }: PropsWithChildren<{}>): JSX.Element => (
  <AppBar position="static">
    <Container>
      <Toolbar disableGutters>{children}</Toolbar>
    </Container>
  </AppBar>
);

export default Header;
