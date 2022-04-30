import styled from 'styled-components';
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
  margin: 4px 10px;
`;

interface DateTextProps {
  fontWeight?: string;
}

export const DateText = styled.span<DateTextProps>`
  line-height: 150%;
  font-size: 16px;
`;

export const DateMonthText = styled(DateText)`
  font-weight: 600;
`;

export const DateYearText = styled(DateText)`
  color: #708797;
`;

export const InputButton = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  cursor: pointer;
  outline: inherit;
  height: 100%;
`;
