import { gql } from 'apollo-server-core';

const Query = gql`
  type Query {
    user: User!
  }
`;

export default Query;
