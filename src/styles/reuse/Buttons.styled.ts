import styled from 'styled-components';

export const ActionButton = styled.button`
  background-color: #1b31a8;
  color: #ffffff;
  border: none;
  cursor: pointer;
  border-radius: 32px;
  font-size: 16px;
  font-weight: 600;
  padding: 18px 128px;
  line-height: 20px;

  &:hover {
    background-color: #2b41b8;
  }

  &:active {
    background-color: #0b2198;
  }
`;
