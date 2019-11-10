import React from 'react';
import styled from '../../lib';
import Button from './Button';

export default {
  title: 'Button',
};

const Margins = styled.div`
  > * {
    margin: 10px;
  }
`;

export const Default = (): JSX.Element => (
  <>
    <Margins>
      <Button color="primary" variant="contained">
        Button
      </Button>
      <Button color="primary" variant="outlined">
        Button
      </Button>
      <Button color="primary" variant="text">
        Button
      </Button>
    </Margins>
    <Margins>
      <Button color="secondary" variant="contained">
        Button
      </Button>
      <Button color="secondary" variant="outlined">
        Button
      </Button>
      <Button color="secondary" variant="text">
        Button
      </Button>
    </Margins>
  </>
);

export const Link = (): JSX.Element => (
  <>
    <Margins>
      <Button color="primary" variant="contained" href="/">
        Link
      </Button>
      <Button color="primary" variant="outlined" href="/">
        Link
      </Button>
      <Button color="primary" variant="text" href="/">
        Link
      </Button>
    </Margins>
    <Margins>
      <Button color="secondary" variant="contained" href="/">
        Link
      </Button>
      <Button color="secondary" variant="outlined" href="/">
        Link
      </Button>
      <Button color="secondary" variant="text" href="/">
        Link
      </Button>
    </Margins>
  </>
);
