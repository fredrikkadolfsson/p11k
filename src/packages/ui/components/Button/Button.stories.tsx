import React from 'react';
import Button from './Button';

export default {
  title: 'Button',
};

export const Contained = (): JSX.Element => (
  <>
    <Button color="primary" variant="contained">
      Contained
    </Button>
    <Button color="secondary" variant="contained">
      Contained
    </Button>
  </>
);
export const Outlined = (): JSX.Element => (
  <>
    <Button color="primary" variant="outlined">
      Outlined
    </Button>
    <Button color="secondary" variant="outlined">
      Outlined
    </Button>
  </>
);
export const Text = (): JSX.Element => (
  <>
    <Button color="primary" variant="text">
      Text
    </Button>
    <Button color="secondary" variant="text">
      Text
    </Button>
  </>
);
