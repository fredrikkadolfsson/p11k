import React from 'react';
import { Container } from '@material-ui/core';
import styled from '../../lib';
import Footer from './Footer';

const linkSections = [
  { title: 'Något', links: [{ text: 'Start', url: '/' }, { text: 'Om oss', url: '/about' }] },
  { title: 'Något2', links: [{ text: 'hej4', url: '/' }, { text: 'hej3', url: '/' }] },
];

export default {
  title: 'Footer',
};

const StyledContainer = styled(Container)`
  width: 750px;
`;

export const Default = (): JSX.Element => (
  <StyledContainer maxWidth="lg">
    <Footer siteName="Perfect Stack" linkSections={linkSections} />
  </StyledContainer>
);
