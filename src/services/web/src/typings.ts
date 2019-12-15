import { NextPageContext } from 'next';
import { ApolloClient } from 'apollo-boost';

export type Locale = 'en' | 'sv';

export type NodeEnv = 'development' | 'production';

export interface InitialPropsProps extends NextPageContext {
  apolloClient: ApolloClient<{}>;
}

export interface InitialProps {
  namespacesRequired: string[];
}
