import styled from 'styled-components';
import { ReactComponent as DollarSign } from '../../../../assets/icons/dollar-sign.svg';

export const DollarSignIcon = styled(DollarSign)`
  top: calc(50% - 24px / 2);
  position: relative;
  left: 12px;
`;

export const AmountContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
`;

export const AmountInputStyled = styled.input`
  font-size: 24px;
  position: relative;
  margin: 14px;
`;
