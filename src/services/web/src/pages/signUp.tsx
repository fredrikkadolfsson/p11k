import React from 'react';
import styled, { Container } from '@fredrikkadolfsson/ui';
import SignUpForm from '../components/SignUpForm/SignUpForm';
import { InitialProps, InitialPropsProps } from '../typings';
import redirectAuthenticated from '../lib/redirectAuthenticated';

const StyledContainer = styled(Container)`
  align-items: center;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const SignUp = (): JSX.Element => (
  <StyledContainer>
    <SignUpForm />
  </StyledContainer>
);

SignUp.getInitialProps = async (props: InitialPropsProps): Promise<InitialProps> => {
  await redirectAuthenticated(props);

  return {
    namespacesRequired: ['signUp', 'common'],
  };
};

export default SignUp;
