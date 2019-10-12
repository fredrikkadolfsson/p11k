import { gql } from 'apollo-server';

const Query = gql`
  type Query {
    hello(name: String): String
  }
`;

export default Query;
