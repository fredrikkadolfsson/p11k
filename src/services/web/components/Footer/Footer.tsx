import React from 'react';
import { Footer as UiFooter } from '@fredrikkadolfsson/ui';

const linkSections = [
  {
    links: [{ text: 'Start', url: '/' }, { text: 'Logga in', url: '/login' }, { text: 'Om oss', url: '/about' }],
    title: 'Snabblänkar',
  },
];

const Footer = (): JSX.Element => <UiFooter siteName="Perfect Stack" linkSections={linkSections} />;

export default Footer;
