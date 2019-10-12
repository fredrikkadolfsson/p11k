import { gql } from 'apollo-server';

const User = gql`
  type User {
    id: ID!
    firstName: String!
    lastName: String!
  }
`;

export default User;
