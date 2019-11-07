/* eslint-disable @typescript-eslint/no-explicit-any */
import { createMuiTheme } from '@material-ui/core/styles';
import { SerializedStyles, css } from '@emotion/core';

const palette = {
  primary: { main: '#212121' },
  secondary: { main: '#0277BD' },
};

export const muiTheme = createMuiTheme({ palette });

type mqKays = {
  xs: any;
  sm: any;
  md: any;
  lg: any;
  xl: any;
};
const breakpoints = muiTheme.breakpoints.values;

const mqMin = Object.keys(breakpoints).reduce(
  (accumulator, label) => {
    accumulator[label] = (...args: any): SerializedStyles => css`
      @media (min-width: ${breakpoints[label]}px) {
        ${css(...args)};
      }
    `;
    return accumulator;
  },
  {} as mqKays,
);

const mqMax = Object.keys(breakpoints).reduce(
  (accumulator, label) => {
    accumulator[label] = (...args: any): SerializedStyles => css`
      @media (max-width: ${breakpoints[label] - 1}px) {
        ${css(...args)};
      }
    `;
    return accumulator;
  },
  {} as mqKays,
);

const theme = {
  palette: muiTheme.palette,
  mqMin,
  mqMax,
};

export default theme;
