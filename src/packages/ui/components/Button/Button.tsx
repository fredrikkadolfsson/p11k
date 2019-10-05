import React, { ReactElement } from 'react';
import { default as MiButton, ButtonProps } from '@material-ui/core/Button';

const Button = (props: ButtonProps): ReactElement => <MiButton {...props} />;

export default Button;
