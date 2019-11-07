import styled, { Container } from '@fredrikkadolfsson/ui';
import SignUpForm from '../components/SignUpForm/SignUpForm';

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

export default SignUp;
