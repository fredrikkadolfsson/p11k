import React, { PropsWithChildren } from 'react';
import styled from '@emotion/styled';
import { LinkProps } from 'next/link';
import Button from '../Button/Button';

const StyledLink = styled.button``;

const Link = ({ children, ...restProps }: PropsWithChildren<LinkProps>): JSX.Element => (
  <StyledLink as={Button} {...restProps}>
    {children}
  </StyledLink>
);

export default Link;

// default as NextLink,
