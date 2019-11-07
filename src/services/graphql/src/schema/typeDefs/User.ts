import { gql } from 'apollo-server-core';

const User = gql`
  type User {
    email: String!
    id: ID!
  }
`;

export default User;
