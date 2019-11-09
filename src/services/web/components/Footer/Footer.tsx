import React from 'react';
import { Footer as UiFooter } from '@fredrikkadolfsson/ui';

const linkSections = [
  {
    links: [
      { text: 'Start', url: '/' },
      { text: 'Om oss', url: '/about' },
    ],
    title: 'Viktiga länkar',
  },
  {
    links: [
      { text: 'Logga in', url: '/login' },
      { text: 'Registrering', url: '/signup' },
    ],
    title: 'Kom igång',
  },
];

const Footer = (): JSX.Element => <UiFooter siteName="Perfect Stack" linkSections={linkSections} />;

export default Footer;
