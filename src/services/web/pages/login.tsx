import { Button } from '@fredrikkadolfsson/ui';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const AUTHENTICATE_USER = gql`
  mutation authenticate($email: String!, $password: String!) {
    authenticate(email: $email, password: $password)
  }
`;

const Index = (): JSX.Element => {
  const [authenticate] = useMutation(AUTHENTICATE_USER);

  const onAuthenticate = (): void => {
    authenticate({
      variables: {
        email: 'john@doe.com',
        password: 'test1234',
      },
    });
  };

  return (
    <>
      <p>Index</p>
      <Button onClick={onAuthenticate}>Authenticate!</Button>
    </>
  );
};

export default Index;
