import React from 'react';
import { useFormik } from 'formik';
import { Button, Link, TextField } from '@fredrikkadolfsson/ui';
import gql from 'graphql-tag';
import { useRouter } from 'next/router';
import * as Yup from 'yup';
import { AuthenticateMutationVariables, useAuthenticateMutation } from '../../generated/graphql';
import { minPasswordLength } from '../../constants';

gql`
  mutation authenticate($email: String!, $password: String!) {
    authenticate(email: $email, password: $password)
  }
`;

const LoginForm = (): JSX.Element => {
  const router = useRouter();
  const [authenticate] = useAuthenticateMutation();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email('Invalid email')
        .required('Required'),
      password: Yup.string()
        .min(minPasswordLength, 'Password is too short - should be 8 chars minimum.')
        .required('Required'),
    }),
    onSubmit: async (variables: AuthenticateMutationVariables) => {
      try {
        await authenticate({
          variables,
        });
        await router.replace('/');
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <TextField
        id="email"
        type="email"
        label="Email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        helperText={formik.touched.email ? formik.errors.email : ''}
        error={formik.touched.email && Boolean(formik.errors.email)}
      />
      <TextField
        id="password"
        type="password"
        label="Lösenord"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        helperText={formik.touched.password ? formik.errors.password : ''}
        error={formik.touched.password && Boolean(formik.errors.password)}
      />
      <Button type="submit" disabled={formik.isSubmitting}>
        Logga in
      </Button>
      <p>
        Inte medlem? Registrera dig <Link href="/signup">här!</Link>
      </p>
    </form>
  );
};

export default LoginForm;
