import { Field, Form, Formik, FormikProps } from 'formik';
import { Button, TextField } from '@fredrikkadolfsson/ui';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';

const AUTHENTICATE_USER = gql`
  mutation authenticate($email: String!, $password: String!) {
    authenticate(email: $email, password: $password)
  }
`;

const LoginForm = (): JSX.Element => {
  const [authenticate] = useMutation(AUTHENTICATE_USER);

  return (
    <>
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
          <Form>
            <Field name="email" type="email" component={TextField} />
            <Field name="password" type="password" component={TextField} />
            <Button type="submit" disabled={isSubmitting}>
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default LoginForm;
