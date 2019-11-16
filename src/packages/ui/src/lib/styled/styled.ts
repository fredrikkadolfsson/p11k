import styled, { CreateStyled } from '@emotion/styled'; // eslint-disable-line no-restricted-imports
import { Theme } from '../../components/ThemeProvider';

export interface StyledProps {
  theme: Theme;
}
export default styled as CreateStyled<Theme>;
