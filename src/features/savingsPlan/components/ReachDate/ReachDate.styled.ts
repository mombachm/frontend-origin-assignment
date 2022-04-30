import styled from 'styled-components';
import { MOBILE_MAX_SIZE } from '../../../../styles/GlobalStyle.styled';
import { FormElementContainer } from '../../../../styles/reuse/FormElement.styled';

export const ReachDateFormElementContainer = styled(FormElementContainer)`
  /* max-width: 312px; */
`;

export const ReachDateContainer = styled.div`
  display: grid;
  grid-template-columns: 48px auto 48px;
`;

export const DateContainer = styled.div`
  display: grid;
  grid-template-columns: auto;
  text-align: center;
  margin: 4px 0;
`;

interface DateTextProps {
  fontWeight?: string;
}

export const DateText = styled.span<DateTextProps>`
  line-height: 150%;
  font-size: 16px;

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
