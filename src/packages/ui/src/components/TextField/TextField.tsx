import React from 'react';
import { TextField as MuiTextField, TextFieldProps } from 'formik-material-ui';
import styled from '../../lib';

const StyledTextField = styled(MuiTextField)`
  margin: 10px; /* Temporary */
`;

const TextField = (props: TextFieldProps): JSX.Element => <StyledTextField variant="outlined" {...props} />;
export default TextField;
