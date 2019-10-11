import React from 'react';
import Link from 'next/link';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import styled from '../../lib';
import Container from '../Container/Container';

const StyledLink = styled.a`
  cursor: pointer;
`;

const Header = (): JSX.Element => (
  <AppBar position="static">
    <Container>
      <Toolbar disableGutters>
        <Link href="/">
          <StyledLink>
            <Typography variant="h6">Perfect Stack</Typography>
          </StyledLink>
        </Link>
      </Toolbar>
    </Container>
  </AppBar>
);

export default Header;
