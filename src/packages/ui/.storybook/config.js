import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import centered from '@storybook/addon-centered/react';
import { GlobalCss, ThemeProvider } from '../components';

addDecorator(withInfo);
addDecorator(centered);
addDecorator((getStory) => (
  <>
    <GlobalCss />
    <ThemeProvider>{getStory()}</ThemeProvider>
  </>
));

configure(require.context('../components', true, /\.stories\.tsx?$/), module);
