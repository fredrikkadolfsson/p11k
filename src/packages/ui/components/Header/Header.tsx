import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const Header = (): JSX.Element => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6">Perfect Stack</Typography>
    </Toolbar>
  </AppBar>
);

export default Header;
