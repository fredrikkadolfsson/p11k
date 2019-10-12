import React, { PropsWithChildren } from 'react';
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider as MuiThemeProvider, StylesProvider } from '@material-ui/styles';
import { defaultTheme } from '../../lib';

const muiTheme = createMuiTheme({
  palette: {
    primary: { main: defaultTheme.palette.primary },
    secondary: { main: defaultTheme.palette.secondary },
  },
});

const ThemeProvider = ({ children }: PropsWithChildren<{}>): JSX.Element => (
  <StylesProvider injectFirst>
    <EmotionThemeProvider theme={defaultTheme}>
      <MuiThemeProvider theme={muiTheme}>{children}</MuiThemeProvider>
    </EmotionThemeProvider>
  </StylesProvider>
);

export default ThemeProvider;
