import React from 'react';
import TextField from './TextField';

export default {
  title: 'TextField',
};

export const Default = (): JSX.Element => (
  <>
    <TextField variant="outlined" label="outlined" />
    <TextField variant="filled" label="filled" />
    <TextField variant="standard" label="standard" />
  </>
);
