import styled, { Container } from '@fredrikkadolfsson/ui';
import LoginForm from '../components/LoginForm/LoginForm';

const StyledContainer = styled(Container)`
  align-items: center;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const Index = (): JSX.Element => (
  <StyledContainer>
    <LoginForm />
  </StyledContainer>
);

export default Index;
