import { Form, Formik, FormikProps } from 'formik';
import styled, { Button, Link, TextField } from '@fredrikkadolfsson/ui';
import gql from 'graphql-tag';
import { useApolloClient, useMutation } from '@apollo/react-hooks';
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import * as Yup from 'yup';
import config from '../../config';
import { CreateAccount, CreateAccountVariables } from '../../types/CreateAccount';

const CREATE_ACCOUNT = gql`
  mutation CreateAccount($email: String!, $password: String!, $passwordConfirm: String!) {
    createAccount(email: $email, password: $password, passwordConfirm: $passwordConfirm) {
      id
      email
    }
  }
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  width: 100%;
`;

const RegisterInfo = styled.p`
  text-align: center;
`;

const RegisterLink = styled(Link)`
  font-weight: 500;
`;

const SignUpForm = (): JSX.Element => {
  const client = useApolloClient();
  const router = useRouter();
  const [createAccount] = useMutation<CreateAccount, CreateAccountVariables>(CREATE_ACCOUNT);

  const onSubmit = useCallback(async (variables) => {
    try {
      const { data } = await createAccount({
        variables,
      });
      client.writeData({
        data: {
          [config.JWT_EXISTS_APOLLO_CACHE_NAME]: Boolean(data && data.createAccount.id),
        },
      });
      router.replace('/');
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <Formik
      initialValues={{ email: '', password: '', passwordConfirm: '' }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email('Invalid email')
          .required('Required'),
        password: Yup.string()
          .min(8, 'Password is too short - should be 8 chars minimum.')
          .required('Required'),
        passwordConfirm: Yup.string()
          .oneOf([Yup.ref('password')], 'Passwords do not match')
          .required('Required'),
      })}
      onSubmit={onSubmit}
    >
      {({
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
      }: FormikProps<{ email: string; password: string; passwordConfirm: string }>): JSX.Element => (
        <StyledForm>
          <TextField
            id="email"
            type="email"
            label="Email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.email ? errors.email : ''}
            error={touched.email && Boolean(errors.email)}
          />
          <TextField
            id="password"
            type="password"
            label="Lösenord"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.password ? errors.password : ''}
            error={touched.password && Boolean(errors.password)}
          />
          <TextField
            id="passwordConfirm"
            type="password"
            label="Upprepa lösenord"
            value={values.passwordConfirm}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.passwordConfirm ? errors.passwordConfirm : ''}
            error={touched.passwordConfirm && Boolean(errors.passwordConfirm)}
          />
          <Button type="submit" disabled={isSubmitting}>
            Registrera
          </Button>
          <RegisterInfo>
            Redan medlem? Logga in <RegisterLink href="/login">här!</RegisterLink>
          </RegisterInfo>
        </StyledForm>
      )}
    </Formik>
  );
};

export default SignUpForm;
