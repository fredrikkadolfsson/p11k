import React from 'react';
import { useTranslation } from 'react-i18next';
import { Footer as UiFooter } from '@fredrikkadolfsson/ui';
import useIsUserAuthenticated from '../../hooks/useIsUserAuthenticated';
import LanguageSelector from '../LanguageSelector/LanguageSelector';

const Footer = (): JSX.Element => {
  const { t } = useTranslation('common');
  const isUserAuthenticated = useIsUserAuthenticated();

  const linkSections = React.useMemo(
    () => [
      {
        title: t('important_links', 'Important links'),
        links: [
          { text: t('home', 'Home'), url: '/' },
          { text: t('about', 'About us'), url: '/about' },
        ],
      },
      {
        title: t('get_started', 'Get started'),
        links: isUserAuthenticated
          ? [{ text: t('account', 'My account'), url: '/user' }]
          : [
              { text: t('sign_in', 'Sign in'), url: '/login' },
              { text: t('register', 'Register'), url: '/signup' },
            ],
      },
    ],
    [t, isUserAuthenticated],
  );

  return (
    <UiFooter
      siteName={t('perfect_stack', 'Perfect Stack')}
      linkSections={linkSections}
      locale={<LanguageSelector />}
    />
  );
};

export default React.memo(Footer);
