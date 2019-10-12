import { gql } from 'apollo-server';

const Query = gql`
  type Query {
    user: User!
  }
`;

export default Query;
