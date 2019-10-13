import { Field, Form, Formik, FormikProps } from 'formik';
import styled, { Button, TextField } from '@fredrikkadolfsson/ui';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import { Authenticate, AuthenticateVariables } from './types/authenticate';

const AUTHENTICATE_USER = gql`
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
  const [authenticate] = useMutation<Authenticate, AuthenticateVariables>(AUTHENTICATE_USER);

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={async (variables, { setSubmitting }): Promise<void> => {
        await authenticate({
          variables: variables,
        });
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }: FormikProps<{}>): JSX.Element => (
        <StyledForm>
          <Field name="email" type="email" label="Email" component={TextField} />
          <Field name="password" type="password" label="Password" component={TextField} />
          <Button type="submit" disabled={isSubmitting}>
            Submit
          </Button>
        </StyledForm>
      )}
    </Formik>
  );
};

export default LoginForm;
