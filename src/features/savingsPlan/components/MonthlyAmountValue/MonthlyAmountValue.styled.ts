import styled from 'styled-components';
import { MonthlyAmountValue } from '.';

export const MonthlyAmountValueHighlighted = styled(MonthlyAmountValue)`
  font-family: Rubik;
  font-weight: 500;
  line-height: 120%;
  font-size: 32px;
  color: #0079ff;
  overflow: hidden;
`;

export const MonthlyAmountValueInText = styled(MonthlyAmountValue)`
  font-weight: 600;
`;
