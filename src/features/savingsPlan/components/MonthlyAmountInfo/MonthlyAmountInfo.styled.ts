import styled from 'styled-components';
import { MOBILE_MAX_SIZE } from '../../../../styles/GlobalStyle.styled';

export const MonthlyAmountLabel = styled.span`
  line-height: 120%;
  font-size: 20px;

  @media screen and (max-width: ${MOBILE_MAX_SIZE}) {
    & {
      font-size: 18px;
    }
  }
`;
