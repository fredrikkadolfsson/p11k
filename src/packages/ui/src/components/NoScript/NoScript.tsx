import React, { PropsWithChildren } from 'react';
import styled, { StyledProps } from '../../lib';

const StyledNoScript = styled.noscript`
  background-color: ${(props: StyledProps): string => props.theme.palette.secondary.main};
  color: ${(props: StyledProps): string => props.theme.palette.secondary.contrastText};
  text-align: center;
`;

const NoScript = ({ children }: PropsWithChildren<{}>): JSX.Element => (
  <StyledNoScript>
    <p>{children}</p>
  </StyledNoScript>
);

export default NoScript;
