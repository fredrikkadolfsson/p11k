import React from 'react';
import { useTranslation } from 'react-i18next';
import styled, { Button, Link, Popover, StyledProps } from '@fredrikkadolfsson/ui';
import config from '../../config';
import { Locale } from '../../typings';

const StyledButton = styled(Button)`
  padding: 0;
  margin: 0;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${(props: StyledProps): string => props.theme.sizes.medium};
`;

const LanguageSelector = (): JSX.Element => {
  const { t, i18n } = useTranslation('common');
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const currentLocale = React.useMemo(() => i18n.language as Locale, [i18n.language]);
  const availableLocales: Locale[] = React.useMemo(
    () => config.LOCALE_SUPPORTED.filter((locale: Locale) => locale !== currentLocale),
    [config.LOCALE_SUPPORTED, currentLocale],
  );

  return (
    <>
      <StyledButton
        id={'locale-popover'}
        variant="text"
        color="inherit"
        onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
          setAnchorEl(event.currentTarget);
        }}
      >
        {t(`locale_${currentLocale}`, currentLocale)}
      </StyledButton>
      <Popover
        id={'locale-popover'}
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={(): void => {
          setAnchorEl(null);
        }}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
      >
        <StyledDiv>
          {availableLocales.map(
            (locale: string): JSX.Element => (
              <Link
                key={locale}
                onClick={async (): Promise<void> => {
                  await i18n.changeLanguage(locale);
                  setAnchorEl(null);
                }}
              >
                {t(`locale_${locale}`, locale)}
              </Link>
            ),
          )}
        </StyledDiv>
      </Popover>
    </>
  );
};

export default React.memo(LanguageSelector);
