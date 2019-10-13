import { Button } from '@fredrikkadolfsson/ui';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { GetUser } from './types/getUser';

const GET_USER = gql`
  query GetUser {
    user {
      id
      firstName
      lastName
    }
  }
`;

const Index = (): JSX.Element => {
  const { data } = useQuery<GetUser>(GET_USER);

  console.log(data);
  return (
    <>
      <p>Index</p>
      <Button href="/about">To About</Button>
    </>
  );
};

export default Index;
