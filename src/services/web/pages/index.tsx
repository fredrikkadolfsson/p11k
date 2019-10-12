import { Button } from '@fredrikkadolfsson/ui';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { getUser } from './types/getUser';

const GET_USER = gql`
  query getUser {
    user {
      id
      firstName
      lastName
    }
  }
`;

const Index = (): JSX.Element => {
  const { data } = useQuery<getUser>(GET_USER);

  console.log(data);
  return (
    <>
      <p>Index</p>
      <Button href="/about">To About</Button>
    </>
  );
};

export default Index;
