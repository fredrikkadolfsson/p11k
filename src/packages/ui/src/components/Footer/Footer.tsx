import React from 'react';
import { Typography } from '@material-ui/core';
import styled from '../../lib';
import Link from '../Link/Link';
import Container from '../Container/Container';

type FooterProps = {
  siteName: string;
  linkSections: {
    title: string;
    links: {
      text: string;
      url: string;
    }[];
  }[];
};

const StyledFooter = styled.footer`
  background-color: ${(props): string => props.theme.palette.primary};
  color: white;
`;

const StyledContainer = styled(Container)`
  align-items: flex-end;
  display: flex;
  justify-content: space-between;
  padding-bottom: 25px;
  padding-top: 25px;
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const Footer = ({ siteName, linkSections }: FooterProps): JSX.Element => {
  const currentYear = React.useMemo(() => new Date().getFullYear(), []);

  return (
    <StyledFooter>
      <StyledContainer>
        <Column>
          <Typography variant="h5">{siteName}</Typography>
          <span>Copyright &copy; {currentYear}. All Rights Reserved</span>
        </Column>
        {linkSections.map(({ title, links }, sectionIndex) => (
          <Column key={`${title}-${sectionIndex}`}>
            <Typography variant="h6">{title}</Typography>
            {links.map(({ text, url }, linkIndex) => (
              <Link key={`${text}-${linkIndex}`} href={url}>
                {text}
              </Link>
            ))}
          </Column>
        ))}
      </StyledContainer>
    </StyledFooter>
  );
};

export default Footer;