import styled from 'styled-components';

export const Box = styled.div`
  border: 1px solid #e9eef2;
  box-sizing: border-box;
  border-radius: 4px;
  margin: 0 auto;
  float: none;
`;

export const HighlightedBox = styled.div`
  padding: 24px 32px;
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
`;
