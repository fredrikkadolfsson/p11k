import { gql } from 'apollo-server-core';

const Authentication = gql`
  type Authentication {
    isAuthenticated: Boolean!
    token: String!
  }
`;

export default Authentication;
