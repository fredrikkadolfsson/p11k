import React from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
import { default as MuiButton, ButtonProps } from '@material-ui/core/Button';

const StyledButton = styled(MuiButton)`
  margin: 10px; /* Temporary */
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
