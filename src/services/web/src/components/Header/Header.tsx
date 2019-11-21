import React from 'react';
import styled, { Link, Header as UiHeader } from '@fredrikkadolfsson/ui';
import LoginLogout from './LoginLogout/LoginLogout';

const FillSpace = styled.div`
  flex-grow: 1;
`;

const Header = (): JSX.Element => (
  <UiHeader>
    <Link href="/">Perfect Stack</Link>
    <FillSpace />
    <LoginLogout />
  </UiHeader>
);

export default React.memo(Header);
