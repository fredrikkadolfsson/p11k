import React from 'react';
import { Form, Formik, FormikProps } from 'formik';
import { Button, Link, TextField } from '@fredrikkadolfsson/ui';
import gql from 'graphql-tag';
import { useRouter } from 'next/router';
import * as Yup from 'yup';
import { useAuthenticateMutation } from '../../generated/graphql';

gql`
  mutation authenticate($email: String!, $password: String!) {
    authenticate(email: $email, password: $password) {
      id
    }
  }
`;

const LoginForm = (): JSX.Element => {
  const router = useRouter();
  const [authenticate] = useAuthenticateMutation();

  const onSubmit = React.useCallback(async (variables) => {
    try {
      await authenticate({
        variables,
      });
      router.replace('/');
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email('Invalid email')
          .required('Required'),
        password: Yup.string()
          .min(8, 'Password is too short - should be 8 chars minimum.')
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
      }: FormikProps<{ email: string; password: string }>): JSX.Element => (
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
          <Button type="submit" disabled={isSubmitting}>
            Logga in
          </Button>
          <p>
            Inte medlem? Registrera dig <Link href="/signup">här!</Link>
          </p>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
