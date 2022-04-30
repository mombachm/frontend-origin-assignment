import styled from 'styled-components';
import { AmountValue } from '.';
import { MOBILE_MAX_SIZE } from '../../../../styles/GlobalStyle.styled';

export const AmountValueHighlighted = styled(AmountValue)`
  font-family: Rubik;
  font-weight: 500;
  line-height: 120%;
  font-size: 32px;
  color: #0079ff;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 400px;
  text-align: end;

  @media screen and (max-width: ${MOBILE_MAX_SIZE}) {
    & {
      font-size: 24px;
      max-width: 300px;
    }
  }
`;

export const AmountValueInText = styled(AmountValue)`
  display: inline-block;
  vertical-align: bottom;
  max-inline-size: 250px;
  writing-mode: horizontal-tb;
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
`;
