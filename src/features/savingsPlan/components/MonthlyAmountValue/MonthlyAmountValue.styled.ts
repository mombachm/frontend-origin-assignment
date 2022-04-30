import styled from 'styled-components';
import { MonthlyAmountValue } from '.';
import { MOBILE_MAX_SIZE } from '../../../../styles/GlobalStyle.styled';

export const MonthlyAmountValueHighlighted = styled(MonthlyAmountValue)`
  font-family: Rubik;
  font-weight: 500;
  line-height: 120%;
  font-size: 32px;
  color: #0079ff;
  overflow: hidden;

  @media screen and (max-width: ${MOBILE_MAX_SIZE}) {
    & {
      font-size: 24px;
    }
  }
`;

export const MonthlyAmountValueInText = styled(MonthlyAmountValue)`
  font-weight: 600;
`;
