import React from 'react';
import { useFormik } from 'formik';
import { Button, Link, TextField } from '@fredrikkadolfsson/ui';
import gql from 'graphql-tag';
import { useRouter } from 'next/router';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import { AuthenticateMutationVariables, useAuthenticateMutation } from '../../generated/graphql';
import { minPasswordLength } from '../../constants';

gql`
  mutation authenticate($email: String!, $password: String!) {
    authenticate(email: $email, password: $password) {
      isAuthenticated
    }
  }
`;

const LoginForm = (): JSX.Element => {
  const { t } = useTranslation('common');
  const router = useRouter();
  const [authenticate] = useAuthenticateMutation();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email(t('invalid_email', 'Invalid email'))
        .required(t('required', 'Required')),
      password: Yup.string()
        .min(
          minPasswordLength,
          t('invalid_required', 'Password is too short - should be {{minPasswordLength}} chars minimum.', {
            minPasswordLength,
          }),
        )
        .required(t('required', 'Required')),
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
      <TextField id="email" type="email" label={t('email', 'Email')} formik={formik} />
      <TextField id="password" type="password" label={t('password', 'Password')} formik={formik} />
      <Button type="submit" disabled={formik.isSubmitting}>
        {t('sign_in', 'Sign in')}
      </Button>
      <p>
        {t('sign_up_link', 'Not a member? Register')} <Link href="/signup">{t('here', 'here!')}</Link>
      </p>
    </form>
  );
};

export default LoginForm;
