import styled from 'styled-components';
import { MOBILE_MAX_SIZE } from '../../styles/GlobalStyle.styled';

export const MainContainer = styled.div`
  max-width: 560px;
  margin: auto;
  display: flex;
  flex-flow: column;
  align-items: center;
  margin-top: 48px;

  @media screen and (max-width: ${MOBILE_MAX_SIZE}) {
    & {
      margin-top: 32px;
    }
  }
`;
