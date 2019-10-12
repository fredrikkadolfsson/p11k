import React from 'react';
import { default as NextLink } from 'next/link';
import { LinkProps, default as MuiLink } from '@material-ui/core/Link';

const Link = ({ href, children, ...restProps }: LinkProps<'a'>): JSX.Element => {
  const LinkComponent = (
    <MuiLink color="inherit" {...restProps}>
      {children}
    </MuiLink>
  );

  if (!href) {
    return LinkComponent;
  }

  return (
    <NextLink href={href} passHref>
      {LinkComponent}
    </NextLink>
  );
};

export default Link;
