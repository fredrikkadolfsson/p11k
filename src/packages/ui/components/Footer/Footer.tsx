/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import styled from '@emotion/styled';

const StyledFooter = styled.footer`
  background-color: ${(props: any) => props.theme.palette.primary};
  color: ${(props: any) => props.theme.palette.secondary};
`;

const Footer = (): JSX.Element => (
  <StyledFooter>
    <p>hej</p>
    <p>hej</p>
    <p>hej</p>
  </StyledFooter>
);

export default Footer;
