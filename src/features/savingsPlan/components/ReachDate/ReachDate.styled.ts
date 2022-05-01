import styled from 'styled-components';
import { MOBILE_MAX_SIZE } from '../../../../styles/GlobalStyle.styled';

export const ReachDateContainer = styled.div`
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const DateContainer = styled.div`
  display: flex;
  flex-flow: column;
  text-align: center;
  margin: 4px 0;
  flex: 1;
`;

export const DateText = styled.span`
  line-height: 150%;
  font-size: 16px;
  user-select: none;

  @media screen and (max-width: ${MOBILE_MAX_SIZE}) {
    & {
      font-size: 14px;
    }
  }
`;

export const DateMonthText = styled(DateText)`
  font-weight: 600;
`;

export const DateYearText = styled(DateText)`
  color: #708797;
`;

export const InputButton = styled.button`
  width: 48px;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  height: 100%;
  svg path {
    fill: ${(props) => (props.disabled ? '#BACCD9' : '#8A9CA9')};
  }

  &:hover {
    svg path {
      fill: ${(props) => (props.disabled ? '#BACCD9' : '#2b41b8')};
    }
  }
`;
