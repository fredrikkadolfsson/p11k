import React from 'react';
import styled, { Container } from '@fredrikkadolfsson/ui';
import LoginForm from '../components/LoginForm/LoginForm';
import { InitialProps, InitialPropsProps } from '../typings';
import redirectAuthenticated from '../lib/redirectAuthenticated';

const StyledContainer = styled(Container)`
  align-items: center;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const Login = (): JSX.Element => (
  <StyledContainer>
    <LoginForm />
  </StyledContainer>
);

Login.getInitialProps = async (props: InitialPropsProps): Promise<InitialProps> => {
  await redirectAuthenticated(props);

  return {
    namespacesRequired: ['login', 'common'],
  };
};

export default Login;
