import { ServerResponse } from 'http';
import router from 'next/router';
import { ApolloClient, gql } from 'apollo-boost';
import { InitialPropsProps } from '../typings';
import { IsUserAuthenticatedQuery } from '../generated/graphql';
import routes from '../routes';

const redirect = async (res?: ServerResponse, path?: string): Promise<void> => {
  const pathWithFallback = path ?? routes.index;
  if (res) {
    res.writeHead(302, {
      Location: pathWithFallback,
    });
    res.end();
  } else {
    await router.push(pathWithFallback);
  }
};

const isUserAuthenticated = async (apolloClient: ApolloClient<{}>): Promise<boolean> => {
  const data = await apolloClient.query<IsUserAuthenticatedQuery>({
    query: gql`
      query isUserAuthenticated {
        authentication {
          id
          isAuthenticated
        }
      }
    `,
  });

  return data.data.authentication.isAuthenticated;
};

export const redirectAuthenticated = async ({ res, apolloClient }: InitialPropsProps, path?: string): Promise<void> => {
  if (await isUserAuthenticated(apolloClient)) {
    await redirect(res, path);
  }
};

export const redirectUnAuthenticated = async (
  { res, apolloClient }: InitialPropsProps,
  path?: string,
): Promise<void> => {
  if (!(await isUserAuthenticated(apolloClient))) {
    await redirect(res, path);
  }
};
