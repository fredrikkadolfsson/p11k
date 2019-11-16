import { gql } from 'apollo-server-core';

const Mutation = gql`
  type Mutation {
    authenticate(email: String!, password: String!): User!
    createAccount(email: String!, password: String!, passwordConfirm: String!): User!
    unauthenticate: Boolean!
  }
`;

export default Mutation;
