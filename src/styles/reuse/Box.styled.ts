import styled from 'styled-components';
import { MOBILE_MAX_SIZE } from '../GlobalStyle.styled';

export const Box = styled.div`
  border: 1px solid #e9eef2;
  box-sizing: border-box;
  border-radius: 4px;
  margin-top: 24px;
  float: none;
`;

export const HighlightedBox = styled.div`
  padding: 24px 32px;

  @media screen and (max-width: ${MOBILE_MAX_SIZE}) {
    & {
      padding: 24px;
    }
  }
`;

export const TextBox = styled.div`
  background-color: #f4f8fa;
  padding: 24px 32px;
  font-size: 12px;
`;

export const HighlightedElement = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  column-gap: 12px;
`;
