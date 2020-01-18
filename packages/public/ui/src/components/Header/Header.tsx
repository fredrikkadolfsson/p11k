import React, { PropsWithChildren } from 'react';
import { AppBar, AppBarProps, Toolbar } from '@material-ui/core';
import Container from '../Container/Container';

const Header = ({ children, ...props }: PropsWithChildren<AppBarProps>): JSX.Element => (
  <AppBar position="static" {...props}>
    <Container>
      <Toolbar disableGutters>{children}</Toolbar>
    </Container>
  </AppBar>
);

export default Header;
