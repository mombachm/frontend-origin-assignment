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
  font-family: Rubik;
  font-weight: 500;
  font-size: 24px;
  line-height: 120%;
  position: relative;
  margin: 14px;
  border: hidden;
`;
