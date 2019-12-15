import React from 'react';
import { useTranslation } from 'react-i18next';
import { Footer as UiFooter } from '@fredrikkadolfsson/ui';

const Footer = (): JSX.Element => {
  const { t } = useTranslation('common');

  const linkSections = React.useMemo(
    () => [
      {
        links: [
          { text: t('home', 'Home'), url: '/' },
          { text: t('about', 'About us'), url: '/about' },
          { text: t('account', 'My account'), url: '/user' },
        ],
        title: t('important_links', 'Important links'),
      },
      {
        links: [
          { text: t('sign_in', 'Sign in'), url: '/login' },
          { text: t('register', 'Register'), url: '/signup' },
        ],
        title: t('get_started', 'Get started'),
      },
    ],
    [t],
  );

  return <UiFooter siteName={t('site_name', 'Perfect Stack')} linkSections={linkSections} />;
};

export default React.memo(Footer);
