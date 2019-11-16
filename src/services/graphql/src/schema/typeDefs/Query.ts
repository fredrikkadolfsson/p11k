import { gql } from 'apollo-server-core';

const Query = gql`
  type Query {
    isAuthenticated: Boolean!
    user: User!
  }
`;

export default Query;
