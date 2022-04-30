import styled from 'styled-components';

export const ActionButton = styled.button`
  background-color: #1b31a8;
  color: #ffffff;
  border: none;
  cursor: pointer;
  border-radius: 32px;
  font-size: 16px;
  font-weight: 600;
  padding: 18px 0;
  margin-top: 32px;
  line-height: 20px;
  max-width: 320px;
  width: 100%;

  &:hover {
    background-color: #2b41b8;
  }
  &:focus {
    background-color: #2b41b8;
  }
  &:active {
    background-color: #0b2198;
  }
`;
