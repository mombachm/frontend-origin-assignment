import styled from 'styled-components';
import { MOBILE_MAX_SIZE } from '../GlobalStyle.styled';

export const FormContainer = styled.div`
  display: flex;
  flex-flow: wrap;
  row-gap: 8px;
  column-gap: 10px;
  width: 100%;

  @media screen and (max-width: ${MOBILE_MAX_SIZE}) {
    & {
      flex-flow: column;
    }
  }
`;
