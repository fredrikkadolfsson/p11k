import React from 'react';
import Link from 'next/link';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import styled from '../../lib';

const StyledLink = styled.a`
  cursor: pointer;
`;

const Header = (): JSX.Element => (
  <AppBar position="static">
    <Toolbar>
      <Link href="/">
        <StyledLink>
          <Typography variant="h6">Perfect Stack</Typography>
        </StyledLink>
      </Link>
    </Toolbar>
  </AppBar>
);

export default Header;
