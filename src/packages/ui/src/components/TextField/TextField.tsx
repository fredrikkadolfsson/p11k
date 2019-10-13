import React from 'react';
import { default as MuiTextField, TextFieldProps } from '@material-ui/core/TextField';

const TextField = (props: TextFieldProps): JSX.Element => <MuiTextField variant={'outlined' as any} {...props} />; // eslint-disable-line @typescript-eslint/no-explicit-any

export default TextField;
