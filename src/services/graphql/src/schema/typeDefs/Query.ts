import { gql } from 'apollo-server-core';

const Query = gql`
  type Query {
    authentication: Authentication!
    user: User!
  }
`;

export default Query;
