import React, { PropsWithChildren } from 'react';
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming';
import { ThemeProvider as MuiThemeProvider, StylesProvider } from '@material-ui/styles';
import theme from './theme';

const ThemeProvider = ({ children }: PropsWithChildren<{}>): JSX.Element => (
  <StylesProvider injectFirst>
    <EmotionThemeProvider theme={theme}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </EmotionThemeProvider>
  </StylesProvider>
);

export default ThemeProvider;
