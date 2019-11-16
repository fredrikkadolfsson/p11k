import React from 'react';
import gql from 'graphql-tag';
import { Container } from '@fredrikkadolfsson/ui';
import { useUserQuery } from '../generated/graphql';

gql`
  query user {
    user {
      id
      email
    }
  }
`;

const User = (): JSX.Element => {
  const { data } = useUserQuery();
  return (
    <Container>
      <h1>User</h1>
      {data && (
        <p>
          {data.user.id} {data.user.email}
        </p>
      )}
    </Container>
  );
};

export default React.memo(User);
