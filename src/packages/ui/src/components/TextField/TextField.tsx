import React from 'react';
import { default as MuiTextField, TextFieldProps } from '@material-ui/core/TextField';
import styled from '../../lib';

// https://stackoverflow.com/questions/58311182/type-instantiation-is-excessively-deep-and-possibly-infinite-with-emotion-styled
const TemproraryWrapper = styled.div`
  margin: 10px;
`;

const TextField = (props: TextFieldProps): JSX.Element => (
  <TemproraryWrapper>
    {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
    <MuiTextField variant={'outlined' as any} {...props} />{' '}
  </TemproraryWrapper>
);

export default TextField;
