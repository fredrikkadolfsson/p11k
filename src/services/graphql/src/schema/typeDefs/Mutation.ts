import { gql } from 'apollo-server-core';

const Mutation = gql`
  type Mutation {
    authenticate(email: String!, password: String!): String!
    unauthenticate: Boolean!
  }
`;

export default Mutation;
