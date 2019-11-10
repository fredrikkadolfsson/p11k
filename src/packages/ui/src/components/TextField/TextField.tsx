import React from 'react';
import { default as MuiTextField, TextFieldProps } from '@material-ui/core/TextField';
import styled from '../../lib';

const TemproraryWrapper = styled.div`
  margin-bottom: ${(props): string => props.theme.sizes.xxsmall};
  margin-top: ${(props): string => props.theme.sizes.xxsmall};
`;

const TextField = (props: TextFieldProps): JSX.Element => (
  <TemproraryWrapper>
    {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
    <MuiTextField variant={'outlined' as any} fullWidth {...props} />
  </TemproraryWrapper>
);

export default TextField;
