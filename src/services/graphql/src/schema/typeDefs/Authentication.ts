import { gql } from 'apollo-server-core';

const Authentication = gql`
  type Authentication {
    id: ID!
    isAuthenticated: Boolean!
    token: String!
  }
`;

export default Authentication;
