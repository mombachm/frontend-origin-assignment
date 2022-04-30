import styled from 'styled-components';
import { MOBILE_MAX_SIZE } from '../GlobalStyle.styled';

export const Card = styled.div`
  background: #ffffff;
  box-shadow: 0px 16px 32px rgba(30, 42, 50, 0.08);
  border-radius: 8px;
  padding: 35px 40px 40px 40px;

  @media screen and (max-width: ${MOBILE_MAX_SIZE}) {
    & {
      padding: 31px 24px 40px 24px;
    }
  }
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

export const CardDescription = styled.h1`
  line-height: 120%;
  color: #1b31a8;
  text-align: center;
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 24px;

  @media screen and (max-width: ${MOBILE_MAX_SIZE}) {
    & {
      font-size: 18px;
    }
  }
`;
