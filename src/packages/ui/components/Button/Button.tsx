import React from 'react';
import { default as MuiButton, ButtonProps } from '@material-ui/core/Button';
import styled from '@emotion/styled';

const StyledButton = styled(MuiButton)`
  margin: 10px; /* Temporary */
`;

const Button = (props: ButtonProps): JSX.Element => <StyledButton color="primary" variant="contained" {...props} />;

export default Button;
