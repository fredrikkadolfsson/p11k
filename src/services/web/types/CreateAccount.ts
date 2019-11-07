/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateAccount
// ====================================================

export interface CreateAccount_createAccount {
  __typename: "User";
  id: string;
  email: string;
}

export interface CreateAccount {
  createAccount: CreateAccount_createAccount;
}

export interface CreateAccountVariables {
  email: string;
  password: string;
  passwordConfirm: string;
}
