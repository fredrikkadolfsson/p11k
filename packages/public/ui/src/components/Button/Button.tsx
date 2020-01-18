import React from 'react';
import Link from 'next/link';
import { ButtonProps, default as MuiButton } from '@material-ui/core/Button';
import styled, { StyledProps } from '../../lib';

const StyledButton = styled(MuiButton)`
  margin-bottom: ${(props: StyledProps): string => props.theme.sizes.xxsmall};
  margin-top: ${(props: StyledProps): string => props.theme.sizes.xxsmall};
`;

const Button = ({ href, ...restProps }: ButtonProps): JSX.Element => {
  const ButtonComponent = <StyledButton color="primary" variant="contained" {...restProps} />;

  if (href !== undefined) {
    return (
      <Link href={href} passHref>
        {ButtonComponent}
      </Link>
    );
  }

  return ButtonComponent;
};

export default Button;
