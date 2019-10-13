import { gql } from 'apollo-server-core';

const Mutation = gql`
  type Mutation {
    authenticate(email: String!, password: String!): Boolean
    signOut: Boolean
  }
`;

export default Mutation;
