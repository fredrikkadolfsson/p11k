import React from 'react';
import Button from './Button';

export default {
  title: 'Button',
};

export const Default = (): JSX.Element => (
  <>
    <div>
      <Button color="primary" variant="contained">
        Button
      </Button>
      <Button color="primary" variant="outlined">
        Button
      </Button>
      <Button color="primary" variant="text">
        Button
      </Button>
    </div>
    <div>
      <Button color="secondary" variant="contained">
        Button
      </Button>
      <Button color="secondary" variant="outlined">
        Button
      </Button>
      <Button color="secondary" variant="text">
        Button
      </Button>
    </div>
  </>
);

export const Link = (): JSX.Element => (
  <>
    <div>
      <Button color="primary" variant="contained" href="/">
        Link
      </Button>
      <Button color="primary" variant="outlined" href="/">
        Link
      </Button>
      <Button color="primary" variant="text" href="/">
        Link
      </Button>
    </div>
    <div>
      <Button color="secondary" variant="contained" href="/">
        Link
      </Button>
      <Button color="secondary" variant="outlined" href="/">
        Link
      </Button>
      <Button color="secondary" variant="text" href="/">
        Link
      </Button>
    </div>
  </>
);
