import React, { PropsWithChildren } from 'react';
import { default as NextLink, LinkProps } from 'next/link';

const Link = ({ children, ...restProps }: PropsWithChildren<LinkProps>): JSX.Element => (
  <NextLink {...restProps}>
    <a>{children}</a>
  </NextLink>
);

export default Link;
