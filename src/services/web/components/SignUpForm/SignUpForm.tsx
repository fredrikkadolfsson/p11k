import React from 'react';
import { Form, Formik, FormikProps } from 'formik';
import { Button, Link, TextField } from '@fredrikkadolfsson/ui';
import gql from 'graphql-tag';
import { useRouter } from 'next/router';
import * as Yup from 'yup';
import { useCreateAccountMutation } from '../../generated/graphql';

gql`
  mutation createAccount($email: String!, $password: String!, $passwordConfirm: String!) {
    createAccount(email: $email, password: $password, passwordConfirm: $passwordConfirm) {
      id
      email
    }
  }
`;

const SignUpForm = (): JSX.Element => {
  const router = useRouter();
  const [createAccount] = useCreateAccountMutation();

  const onSubmit = React.useCallback(async (variables) => {
    try {
      await createAccount({
        variables,
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
        <Form>
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
          <p>
            Redan medlem? Logga in <Link href="/login">här!</Link>
          </p>
        </Form>
      )}
    </Formik>
  );
};

export default SignUpForm;
