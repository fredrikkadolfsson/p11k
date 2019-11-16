import React from 'react';
import { Typography } from '@material-ui/core';
import { SerializedStyles, css } from '@emotion/core';
import styled, { StyledProps } from '../../lib';
import Link from '../Link/Link';
import Container from '../Container/Container';

interface FooterProps {
  siteName: string;
  linkSections: {
    title: string;
    links: {
      text: string;
      url: string;
    }[];
  }[];
}

const StyledFooter = styled.footer`
  background-color: ${(props: StyledProps): string => props.theme.palette.primary.main};
  color: ${(props: StyledProps): string => props.theme.palette.primary.contrastText};
`;

const StyledContainer = styled(Container)`
  padding-bottom: ${(props: StyledProps): string => props.theme.sizes.medium};
  padding-top: ${(props: StyledProps): string => props.theme.sizes.medium};
`;

const Divider = styled.div`
  display: flex;
  justify-content: space-between;

  ${(props: StyledProps): SerializedStyles => css`
    ${props.theme.device.mobileL} {
      align-items: flex-start;
      flex-direction: column-reverse;
    }
  `}
`;

const Hr = styled.div`
  border-top: 1px solid ${(props: StyledProps): string => props.theme.palette.primary.contrastText};
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;

  :first-of-type {
    justify-content: flex-end;
  }

  :not(:first-of-type) {
    margin-bottom: ${(props: StyledProps): string => props.theme.sizes.xxxsmall};

    ${(props: StyledProps): SerializedStyles => css`
      ${props.theme.device.mobileL} {
        margin-bottom: ${props.theme.sizes.normedium};
      }
    `}
  }
`;

const Footer = ({ siteName, linkSections }: FooterProps): JSX.Element => {
  const currentYear = React.useMemo(() => new Date().getFullYear(), []);

  return (
    <StyledFooter>
      <StyledContainer maxWidth="md">
        <Divider>
          <Column>
            <Typography variant="h5">{siteName}</Typography>
          </Column>
          {linkSections.map(({ title, links }: FooterProps['linkSections'][0], sectionIndex: number) => (
            <Column key={`${title}-${sectionIndex}`}>
              <Typography variant="h6">{title}</Typography>
              {links.map(({ text, url }: FooterProps['linkSections'][0]['links'][0], linkIndex: number) => (
                <Link key={`${text}-${linkIndex}`} href={url}>
                  {text}
                </Link>
              ))}
            </Column>
          ))}
        </Divider>
        <Hr />
        <span>Copyright &copy; {currentYear}. All Rights Reserved</span>
      </StyledContainer>
    </StyledFooter>
  );
};

export default Footer;
