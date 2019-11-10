import React, { PropsWithChildren } from 'react';
import styled from '../../lib';

const StyledNoScript = styled.noscript`
  background-color: ${(props): string => props.theme.palette.secondary.main};
  color: ${(props): string => props.theme.palette.secondary.contrastText};
  text-align: center;
`;

const NoScript = ({ children }: PropsWithChildren<{}>): JSX.Element => (
  <StyledNoScript>
    <p>{children}</p>
  </StyledNoScript>
);

export default NoScript;
