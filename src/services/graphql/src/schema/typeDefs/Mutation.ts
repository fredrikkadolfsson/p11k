import { gql } from 'apollo-server-core';

const Mutation = gql`
  type Mutation {
    authenticate(email: String!, password: String!): Boolean
  }
`;

export default Mutation;
