import styled from 'styled-components';
import { MOBILE_MAX_SIZE } from '../GlobalStyle.styled';

export const HighlightedBox = styled.div`
  padding: 24px 32px;

  @media screen and (max-width: ${MOBILE_MAX_SIZE}) {
    & {
      padding: 24px;
    }
  }
`;

export const HighlightedElement = styled.div`
  align-items: center;
  column-gap: 12px;
  row-gap: 10px;
  display: flex;
  flex-flow: wrap;
`;
