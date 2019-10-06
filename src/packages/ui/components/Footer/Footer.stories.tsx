/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import styled from '@emotion/styled';
import { Container } from '@material-ui/core';
import Footer from './Footer';

export default {
  title: 'Footer',
};

const StyledButton = styled(Container)`
  background-color: ${(props: any) => props.theme.palette.primary};
  color: ${(props: any) => props.theme.palette.secondary};
`;

export const Default = (): JSX.Element => (
  <StyledButton fixed>
    <Footer />
  </StyledButton>
);
