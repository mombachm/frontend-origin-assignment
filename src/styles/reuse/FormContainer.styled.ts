import styled from 'styled-components';

export const FormContainer = styled.div`
  display: flex;
  flex-flow: wrap;
  row-gap: 8px;
  column-gap: 10px;
  width: 100%;

  @media screen and (max-width: 600px) {
    & {
      flex-flow: column;
    }
  }
`;
