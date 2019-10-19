import { Form, Formik, FormikProps } from 'formik';
import styled, { Button, TextField } from '@fredrikkadolfsson/ui';
import gql from 'graphql-tag';
import { useApolloClient, useMutation } from '@apollo/react-hooks';
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import config from '../../config';
import { Authenticate, AuthenticateVariables } from '../../types/Authenticate';

const AUTHENTICATE = gql`
  mutation Authenticate($email: String!, $password: String!) {
    authenticate(email: $email, password: $password)
  }
`;

const StyledForm = styled(Form)`
  margin: auto;
  display: flex;
  flex-direction: column;
  max-width: 500px;
`;

const LoginForm = (): JSX.Element => {
  const client = useApolloClient();
  const router = useRouter();
  const [authenticate] = useMutation<Authenticate, AuthenticateVariables>(AUTHENTICATE);

  const onSubmit = useCallback(async (variables) => {
    const { data } = await authenticate({
      variables,
    });
    client.writeData({
      data: {
        [config.JWT_EXISTS_APOLLO_CACHE_NAME]: data && data.authenticate,
      },
    });
    router.replace('/');
  }, []);

  return (
    <Formik initialValues={{ email: '', password: '' }} onSubmit={onSubmit}>
      {({
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
      }: FormikProps<{ email: string; password: string }>): JSX.Element => (
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
            label="Password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.password ? errors.password : ''}
            error={touched.password && Boolean(errors.password)}
          />
          <Button type="submit" disabled={isSubmitting}>
            Submit
          </Button>
        </StyledForm>
      )}
    </Formik>
  );
};

export default LoginForm;
