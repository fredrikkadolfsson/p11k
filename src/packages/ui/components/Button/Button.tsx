import React from 'react';
import styled from '@emotion/styled';
import { default as MuiButton, ButtonProps } from '@material-ui/core/Button';

const StyledButton = styled(MuiButton)`
  margin: 10px; /* Temporary */
`;

const Button = (props: ButtonProps): JSX.Element => <StyledButton color="primary" variant="contained" {...props} />;

export default Button;
