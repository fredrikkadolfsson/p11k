import { Form, Formik, FormikProps } from 'formik';
import styled, { Button, Link, TextField } from '@fredrikkadolfsson/ui';
import gql from 'graphql-tag';
import { useApolloClient, useMutation } from '@apollo/react-hooks';
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import * as Yup from 'yup';
import config from '../../config';
import { Authenticate, AuthenticateVariables } from '../../types/Authenticate';

const AUTHENTICATE = gql`
  mutation Authenticate($email: String!, $password: String!) {
    authenticate(email: $email, password: $password)
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

const LoginForm = (): JSX.Element => {
  const client = useApolloClient();
  const router = useRouter();
  const [authenticate] = useMutation<Authenticate, AuthenticateVariables>(AUTHENTICATE);

  const onSubmit = useCallback(async (variables) => {
    try {
      const { data } = await authenticate({
        variables,
      });
      client.writeData({
        data: {
          [config.JWT_EXISTS_APOLLO_CACHE_NAME]: Boolean(data && data.authenticate),
        },
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
          <RegisterInfo>
            Inte medlem? Registrera dig <RegisterLink href="/signup">här!</RegisterLink>
          </RegisterInfo>
        </StyledForm>
      )}
    </Formik>
  );
};

export default LoginForm;
