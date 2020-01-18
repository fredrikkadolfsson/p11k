import React from 'react';
import { default as MuiTextField, TextFieldProps as MuiTextFieldProps } from '@material-ui/core/TextField';
import styled, { StyledProps } from '../../lib';

const TemproraryWrapper = styled.div`
  margin-bottom: ${(props: StyledProps): string => props.theme.sizes.xxsmall};
  margin-top: ${(props: StyledProps): string => props.theme.sizes.xxsmall};
`;

interface TextFieldProps {
  id: string;
  formik: {
    [field: string]: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  };
}
interface TextFieldPropsEmpty {
  formik?: undefined;
}

const TextField = ({
  id,
  formik,
  ...props
}: MuiTextFieldProps & (TextFieldProps | TextFieldPropsEmpty)): JSX.Element | null => {
  const formikProps =
    formik === undefined || id === undefined
      ? {}
      : {
          value: formik.values[id],
          onChange: formik.handleChange,
          onBlur: formik.handleBlur,
          helperText: formik.touched[id] === true ? formik.errors[id] : '',
          error: formik.touched[id] === true && Boolean(formik.errors[id]),
        };

  return (
    <TemproraryWrapper>
      <MuiTextField
        id={id}
        fullWidth
        variant={'outlined' as any} // eslint-disable-line @typescript-eslint/no-explicit-any
        {...formikProps}
        {...props}
      />
    </TemproraryWrapper>
  );
};

export default TextField;
