import { gql } from 'apollo-server';

const User = gql`
  type User {
    id: ID!
  }
`;

export default User;
