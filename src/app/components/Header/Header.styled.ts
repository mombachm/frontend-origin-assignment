import styled from 'styled-components';
import { MOBILE_MAX_SIZE } from '../../../styles/GlobalStyle.styled';

export const HeaderIcon = styled.div`
  margin: 24px 56px;
  width: 100px;

  @media screen and (max-width: ${MOBILE_MAX_SIZE}) {
    & {
      width: 75px;
      margin: 16px;
    }
  }
`;

export const NavBar = styled.nav`
  position: absolute;
  width: 100%;
`;
