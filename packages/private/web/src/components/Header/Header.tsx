import React from 'react';
import { useTranslation } from 'react-i18next';
import styled, { Link, Header as UiHeader } from '@fredrikkadolfsson/ui';
import routes from '../../routes';
import LoginLogout from './LoginLogout/LoginLogout';

const FillSpace = styled.div`
  flex-grow: 1;
`;

const Header = (): JSX.Element => {
  const { t } = useTranslation('common');

  return (
    <UiHeader>
      <Link href={routes.index}>{t('perfect_stack', 'Perfect Stack')}</Link>
      <FillSpace />
      <LoginLogout />
    </UiHeader>
  );
};
export default React.memo(Header);
