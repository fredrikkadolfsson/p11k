import { Theme as MuiThemeType, createMuiTheme } from '@material-ui/core/styles';

const breakpoints = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tablet: 768,
  laptop: 1024,
  laptopL: 1440,
  desktop: 2560,
};

const createBreakpoint = (width: number): string => `@media (max-width: ${width}px)`;

const theme = {
  device: {
    mobileS: createBreakpoint(breakpoints.mobileS),
    mobileM: createBreakpoint(breakpoints.mobileM),
    mobileL: createBreakpoint(breakpoints.mobileL),
    tablet: createBreakpoint(breakpoints.tablet),
    laptop: createBreakpoint(breakpoints.laptop),
    laptopL: createBreakpoint(breakpoints.laptopL),
    desktop: createBreakpoint(breakpoints.desktop),
  },
  palette: {
    primary: {
      main: '#212121',
    },
    secondary: {
      main: '#0277BD',
    },
  },
  sizes: {
    xxxsmall: '0.24rem', // 4px
    xxsmall: '0.5rem', // 8px
    xsmall: '0.75rem', // 12px
    small: '0.875rem', // 14px
    normal: '1rem', // 16px
    normedium: '1.25rem', // 20px
    medium: '1.5rem', // 24px
    large: '2rem', // 32px
    xlarge: '2.5rem', // 40px
    xxlarge: '4rem', // 64px
    xxxlarge: '5rem', // 80px
  },
  widths: {
    xxxsmall: '20rem', // 320px
    xxsmall: '25rem', // 400px
    xsmall: '30rem', // 480px
    small: '35rem', // 560px
    medium: '40rem', // 640px
    large: '45rem', // 720px
    xlarge: '50rem', // 800px
  },
};

export type ThemeType = MuiThemeType & typeof theme;

export default createMuiTheme(theme) as ThemeType;
