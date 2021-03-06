import styled from 'styled-components';
import { ReactComponent as DollarSign } from '../../../../assets/icons/dollar-sign.svg';
import { MOBILE_MAX_SIZE } from '../../../../styles/GlobalStyle.styled';

export const AmountContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
`;

export const AmountInputStyled = styled.input`
  font-family: Rubik;
  font-weight: 500;
  font-size: 24px;
  height: 24px;
  line-height: 120%;
  position: relative;
  margin: 14px 0;
  border: hidden;
  padding: 0 14px;
  width: 100%;
  display: block;
  color: #4d6475;
  user-select: auto;

  @media screen and (max-width: ${MOBILE_MAX_SIZE}) {
    & {
      font-size: 20px;
    }
  }
`;

export const DollarSignIcon = styled(DollarSign)`
  position: relative;
  left: 12px;
  margin-right: 8px;
`;
