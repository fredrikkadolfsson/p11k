import React from 'react';
import { Button, Link, TextField } from '@fredrikkadolfsson/ui';
import gql from 'graphql-tag';
import { useRouter } from 'next/router';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import { CreateAccountMutationVariables, useCreateAccountMutation } from '../../generated/graphql';
import { minPasswordLength } from '../../constants';

gql`
  mutation createAccount($email: String!, $password: String!, $passwordConfirm: String!) {
    createAccount(email: $email, password: $password, passwordConfirm: $passwordConfirm) {
      id
      email
    }
  }
`;

const SignUpForm = (): JSX.Element => {
  const { t } = useTranslation('common');
  const router = useRouter();
  const [createAccount] = useCreateAccountMutation();

  const formik = useFormik({
    initialValues: { email: '', password: '', passwordConfirm: '' },
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
      passwordConfirm: Yup.string()
        .oneOf([Yup.ref('password')], t('invalid_password_match', 'Passwords do not match'))
        .required(t('required', 'Required')),
    }),
    onSubmit: async (variables: CreateAccountMutationVariables) => {
      try {
        await createAccount({
          variables,
        });
        await router.replace('/user');
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <TextField id="email" type="email" label={t('email', 'Email')} formik={formik} />
      <TextField id="password" type="password" label={t('password', 'Password')} formik={formik} />
      <TextField id="passwordConfirm" type="password" label={t('password_repeat', 'Repeat password')} formik={formik} />
      <Button type="submit" disabled={formik.isSubmitting}>
        Registrera
        {t('register', 'Register')}
      </Button>
      <p>
        {t('sign_in_link', 'Already a member? Sign in')} <Link href="/login">{t('here', 'here!')}</Link>
      </p>
    </form>
  );
};

export default SignUpForm;
