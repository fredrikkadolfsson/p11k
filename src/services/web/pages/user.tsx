import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { GetUser } from '../types/GetUser';

const USER = gql`
  query GetUser {
    user {
      id
    }
  }
`;

const User = (): JSX.Element => {
  const { data } = useQuery<GetUser>(USER);

  return (
    <>
      <h1>User</h1>
      {data && <p>{data.user.id}</p>}
    </>
  );
};

export default User;
