import React, { PropsWithChildren } from 'react';
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider as MuiThemeProvider, StylesProvider } from '@material-ui/styles';

const theme = {
  palette: {
    primary: '#181A1E',
    secondary: '#95A783',
    error: '#932F3D',
    extra1: '#FE864A',
    extra2: '#F0AB64',
  },
};

const muiTheme = createMuiTheme({
  palette: {
    primary: { main: theme.palette.primary },
    secondary: { main: theme.palette.secondary },
  },
});

const ThemeProvider = ({ children }: PropsWithChildren<{}>): JSX.Element => {
  return (
    <StylesProvider injectFirst>
      <EmotionThemeProvider theme={theme}>
        <MuiThemeProvider theme={muiTheme}>{children}</MuiThemeProvider>
      </EmotionThemeProvider>
    </StylesProvider>
  );
};

export default ThemeProvider;
