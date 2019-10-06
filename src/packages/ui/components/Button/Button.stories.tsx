import React from 'react';
import ButtonComponent from './Button';

export default {
  title: 'Button',
};

export const Button = (): JSX.Element => (
  <>
    <div>
      <ButtonComponent color="primary" variant="contained">
        Button
      </ButtonComponent>
      <ButtonComponent color="primary" variant="outlined">
        Button
      </ButtonComponent>
      <ButtonComponent color="primary" variant="text">
        Button
      </ButtonComponent>
    </div>
    <div>
      <ButtonComponent color="secondary" variant="contained">
        Button
      </ButtonComponent>
      <ButtonComponent color="secondary" variant="outlined">
        Button
      </ButtonComponent>
      <ButtonComponent color="secondary" variant="text">
        Button
      </ButtonComponent>
    </div>
  </>
);

export const Link = (): JSX.Element => (
  <>
    <div>
      <ButtonComponent color="primary" variant="contained" href="/">
        Link
      </ButtonComponent>
      <ButtonComponent color="primary" variant="outlined" href="/">
        Link
      </ButtonComponent>
      <ButtonComponent color="primary" variant="text" href="/">
        Link
      </ButtonComponent>
    </div>
    <div>
      <ButtonComponent color="secondary" variant="contained" href="/">
        Link
      </ButtonComponent>
      <ButtonComponent color="secondary" variant="outlined" href="/">
        Link
      </ButtonComponent>
      <ButtonComponent color="secondary" variant="text" href="/">
        Link
      </ButtonComponent>
    </div>
  </>
);
