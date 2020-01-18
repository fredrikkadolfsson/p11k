import React from 'react';
import { default as NextLink } from 'next/link';
import { LinkProps, default as MuiLink } from '@material-ui/core/Link';
import styled from '../../lib';

const StyledLink = styled(MuiLink)`
  cursor: pointer;
`;

const Link = ({ href, children, ...restProps }: LinkProps<'a'>): JSX.Element => {
  const LinkComponent = (
    <StyledLink color="inherit" {...restProps}>
      {children}
    </StyledLink>
  );

  if (href === undefined) {
    return LinkComponent;
  }

  return (
    <NextLink href={href} passHref>
      {LinkComponent}
    </NextLink>
  );
};

export default Link;
