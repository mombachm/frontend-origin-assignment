import styled from 'styled-components';

export const Card = styled.div`
  background: #ffffff;
  box-shadow: 0px 16px 32px rgba(30, 42, 50, 0.08);
  border-radius: 8px;
  padding: 40px;
`;

export const CardHeader = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
`;

export const CardHeaderInfo = styled.div`
  margin-left: 16px;
`;

export const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
