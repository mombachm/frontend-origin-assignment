import styled from 'styled-components';
import { MOBILE_MAX_SIZE } from '../GlobalStyle.styled';

export const H2 = styled.h2`
  font-family: Rubik;
  font-weight: 500;
  line-height: 120%;
  font-size: 24px;
`;

export const H4 = styled.h4`
  font-weight: 400;
  line-height: 150%;
  font-size: 16px;
  color: #708797;

  @media screen and (max-width: ${MOBILE_MAX_SIZE}) {
    & {
      font-size: 14px;
    }
  }
`;
