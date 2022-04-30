import styled from 'styled-components';
import { MOBILE_MAX_SIZE } from '../GlobalStyle.styled';

export const LabelContainer = styled.div`
  margin: 4px 0;
`;

export const Label = styled.span`
  line-height: 150%;
  font-size: 14px;

  @media screen and (max-width: ${MOBILE_MAX_SIZE}) {
    & {
      font-size: 12px;
    }
  }
`;

export const HighlightedLabel = styled.span`
  line-height: 120%;
  font-size: 20px;
  flex: 1;
  /* white-space: nowrap; */

  @media screen and (max-width: ${MOBILE_MAX_SIZE}) {
    & {
      font-size: 18px;
    }
  }
`;
