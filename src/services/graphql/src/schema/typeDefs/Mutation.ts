import { gql } from 'apollo-server-core';

const Mutation = gql`
  type Mutation {
    authenticate(email: String!, password: String!): Authentication!
    createAccount(email: String!, password: String!, passwordConfirm: String!): User!
    unauthenticate: Authentication!
  }
`;

export default Mutation;
