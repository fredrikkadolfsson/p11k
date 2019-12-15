import React from 'react';
import styled, { Container } from '@fredrikkadolfsson/ui';
import LoginForm from '../components/LoginForm/LoginForm';
import { InitialProps } from '../typings';

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

Login.getInitialProps = (): InitialProps => ({
  namespacesRequired: ['login', 'common'],
});

export default Login;
