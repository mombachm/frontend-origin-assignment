import styled from 'styled-components';

export const FormElement = styled.div`
  border: 1px solid #e9eef2;
  box-sizing: border-box;
  border-radius: 4px;
  margin: 0 auto;
  height: 56px;
  float: none;

  &:focus-within {
    border-color: #0079ff;
  }
`;

interface FormElementContainerProps {
  flex?: number;
}

export const FormElementContainer = styled.div<FormElementContainerProps>`
  flex: ${(props) => (props.flex ? props.flex : 1)};
`;
