import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

export type Authentication = {
   __typename?: 'Authentication',
  id: Scalars['ID'],
  isAuthenticated: Scalars['Boolean'],
  token: Scalars['String'],
};

export type Mutation = {
   __typename?: 'Mutation',
  authenticate: Authentication,
  createAccount: User,
  unauthenticate: Authentication,
};


export type MutationAuthenticateArgs = {
  email: Scalars['String'],
  password: Scalars['String']
};


export type MutationCreateAccountArgs = {
  email: Scalars['String'],
  password: Scalars['String'],
  passwordConfirm: Scalars['String']
};

export type Query = {
   __typename?: 'Query',
  authentication: Authentication,
  user: User,
};

export type User = {
   __typename?: 'User',
  email: Scalars['String'],
  id: Scalars['ID'],
};

export type UnauthenticateMutationVariables = {};


export type UnauthenticateMutation = (
  { __typename?: 'Mutation' }
  & { unauthenticate: (
    { __typename?: 'Authentication' }
    & Pick<Authentication, 'id' | 'isAuthenticated'>
  ) }
);

export type AuthenticateMutationVariables = {
  email: Scalars['String'],
  password: Scalars['String']
};


export type AuthenticateMutation = (
  { __typename?: 'Mutation' }
  & { authenticate: (
    { __typename?: 'Authentication' }
    & Pick<Authentication, 'id' | 'isAuthenticated'>
  ) }
);

export type CreateAccountMutationVariables = {
  email: Scalars['String'],
  password: Scalars['String'],
  passwordConfirm: Scalars['String']
};


export type CreateAccountMutation = (
  { __typename?: 'Mutation' }
  & { createAccount: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'email'>
  ) }
);

export type IsUserAuthenticatedQueryVariables = {};


export type IsUserAuthenticatedQuery = (
  { __typename?: 'Query' }
  & { authentication: (
    { __typename?: 'Authentication' }
    & Pick<Authentication, 'id' | 'isAuthenticated'>
  ) }
);

export type UserQueryVariables = {};


export type UserQuery = (
  { __typename?: 'Query' }
  & { user: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'email'>
  ) }
);


export const UnauthenticateDocument = gql`
    mutation unauthenticate {
  unauthenticate {
    id
    isAuthenticated
  }
}
    `;
export type UnauthenticateMutationFn = ApolloReactCommon.MutationFunction<UnauthenticateMutation, UnauthenticateMutationVariables>;

/**
 * __useUnauthenticateMutation__
 *
 * To run a mutation, you first call `useUnauthenticateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUnauthenticateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [unauthenticateMutation, { data, loading, error }] = useUnauthenticateMutation({
 *   variables: {
 *   },
 * });
 */
export function useUnauthenticateMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UnauthenticateMutation, UnauthenticateMutationVariables>) {
        return ApolloReactHooks.useMutation<UnauthenticateMutation, UnauthenticateMutationVariables>(UnauthenticateDocument, baseOptions);
      }
export type UnauthenticateMutationHookResult = ReturnType<typeof useUnauthenticateMutation>;
export type UnauthenticateMutationResult = ApolloReactCommon.MutationResult<UnauthenticateMutation>;
export type UnauthenticateMutationOptions = ApolloReactCommon.BaseMutationOptions<UnauthenticateMutation, UnauthenticateMutationVariables>;
export const AuthenticateDocument = gql`
    mutation authenticate($email: String!, $password: String!) {
  authenticate(email: $email, password: $password) {
    id
    isAuthenticated
  }
}
    `;
export type AuthenticateMutationFn = ApolloReactCommon.MutationFunction<AuthenticateMutation, AuthenticateMutationVariables>;

/**
 * __useAuthenticateMutation__
 *
 * To run a mutation, you first call `useAuthenticateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAuthenticateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [authenticateMutation, { data, loading, error }] = useAuthenticateMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useAuthenticateMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AuthenticateMutation, AuthenticateMutationVariables>) {
        return ApolloReactHooks.useMutation<AuthenticateMutation, AuthenticateMutationVariables>(AuthenticateDocument, baseOptions);
      }
export type AuthenticateMutationHookResult = ReturnType<typeof useAuthenticateMutation>;
export type AuthenticateMutationResult = ApolloReactCommon.MutationResult<AuthenticateMutation>;
export type AuthenticateMutationOptions = ApolloReactCommon.BaseMutationOptions<AuthenticateMutation, AuthenticateMutationVariables>;
export const CreateAccountDocument = gql`
    mutation createAccount($email: String!, $password: String!, $passwordConfirm: String!) {
  createAccount(email: $email, password: $password, passwordConfirm: $passwordConfirm) {
    id
    email
  }
}
    `;
export type CreateAccountMutationFn = ApolloReactCommon.MutationFunction<CreateAccountMutation, CreateAccountMutationVariables>;

/**
 * __useCreateAccountMutation__
 *
 * To run a mutation, you first call `useCreateAccountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAccountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAccountMutation, { data, loading, error }] = useCreateAccountMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *      passwordConfirm: // value for 'passwordConfirm'
 *   },
 * });
 */
export function useCreateAccountMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateAccountMutation, CreateAccountMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateAccountMutation, CreateAccountMutationVariables>(CreateAccountDocument, baseOptions);
      }
export type CreateAccountMutationHookResult = ReturnType<typeof useCreateAccountMutation>;
export type CreateAccountMutationResult = ApolloReactCommon.MutationResult<CreateAccountMutation>;
export type CreateAccountMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateAccountMutation, CreateAccountMutationVariables>;
export const IsUserAuthenticatedDocument = gql`
    query isUserAuthenticated {
  authentication {
    id
    isAuthenticated
  }
}
    `;

/**
 * __useIsUserAuthenticatedQuery__
 *
 * To run a query within a React component, call `useIsUserAuthenticatedQuery` and pass it any options that fit your needs.
 * When your component renders, `useIsUserAuthenticatedQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIsUserAuthenticatedQuery({
 *   variables: {
 *   },
 * });
 */
export function useIsUserAuthenticatedQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<IsUserAuthenticatedQuery, IsUserAuthenticatedQueryVariables>) {
        return ApolloReactHooks.useQuery<IsUserAuthenticatedQuery, IsUserAuthenticatedQueryVariables>(IsUserAuthenticatedDocument, baseOptions);
      }
export function useIsUserAuthenticatedLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<IsUserAuthenticatedQuery, IsUserAuthenticatedQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<IsUserAuthenticatedQuery, IsUserAuthenticatedQueryVariables>(IsUserAuthenticatedDocument, baseOptions);
        }
export type IsUserAuthenticatedQueryHookResult = ReturnType<typeof useIsUserAuthenticatedQuery>;
export type IsUserAuthenticatedLazyQueryHookResult = ReturnType<typeof useIsUserAuthenticatedLazyQuery>;
export type IsUserAuthenticatedQueryResult = ApolloReactCommon.QueryResult<IsUserAuthenticatedQuery, IsUserAuthenticatedQueryVariables>;
export const UserDocument = gql`
    query user {
  user {
    id
    email
  }
}
    `;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<UserQuery, UserQueryVariables>) {
        return ApolloReactHooks.useQuery<UserQuery, UserQueryVariables>(UserDocument, baseOptions);
      }
export function useUserLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, baseOptions);
        }
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = ApolloReactCommon.QueryResult<UserQuery, UserQueryVariables>;