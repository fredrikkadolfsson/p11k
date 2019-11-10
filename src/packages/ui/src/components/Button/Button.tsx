import React from 'react';
import Link from 'next/link';
import { ButtonProps, default as MuiButton } from '@material-ui/core/Button';
import styled from '../../lib';

const StyledButton = styled(MuiButton)`
  margin-bottom: ${(props): string => props.theme.sizes.xxsmall};
  margin-top: ${(props): string => props.theme.sizes.xxsmall};
`;

const Button = ({ href, ...restProps }: ButtonProps): JSX.Element => {
  const ButtonComponent = <StyledButton color="primary" variant="contained" {...restProps} />;

  if (href) {
    return (
      <Link href={href} passHref>
        {ButtonComponent}
      </Link>
    );
  }

  return ButtonComponent;
};

export default Button;
