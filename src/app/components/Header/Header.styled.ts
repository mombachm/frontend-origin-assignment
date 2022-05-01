import styled from 'styled-components';
import { MOBILE_MAX_SIZE } from '../../../styles/GlobalStyle.styled';

export const HeaderIcon = styled.div`
  width: 100px;

  @media screen and (max-width: ${MOBILE_MAX_SIZE}) {
    & {
      width: 75px;
    }
  }
`;

export const NavBar = styled.nav`
  width: 100%;
  height: 80px;
  padding-left: 56px;
  display: flex;
  align-items: center;
  background-color: #fff;

  @media screen and (max-width: ${MOBILE_MAX_SIZE}) {
    & {
      height: 56px;
      padding-left: 16px;
    }
  }
`;
