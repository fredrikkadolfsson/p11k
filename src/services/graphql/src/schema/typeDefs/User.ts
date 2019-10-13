import { gql } from 'apollo-server-core';

const User = gql`
  type User {
    id: ID!
    firstName: String!
    lastName: String!
  }
`;

export default User;
