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

  @media screen and (max-width: ${MOBILE_MAX_SIZE}) {
    & {
      font-size: 24px;
    }
  }
`;

export const AmountValueInText = styled(AmountValue)`
  font-weight: 600;
`;
