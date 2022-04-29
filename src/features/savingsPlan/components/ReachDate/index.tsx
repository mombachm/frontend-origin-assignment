import { ReactComponent as ChevronRightIcon } from '../../../../assets/icons/chevron-right.svg';
import { ReactComponent as ChevronLeftIcon } from '../../../../assets/icons/chevron-left.svg';
import {
  formatDateToLongMonth,
  formatDateToYear,
  getPreviousMonthDate,
  isNotFutureDate,
} from '../../../../utils/dateUtils';
import { KeyboardEvent } from 'react';
import { FormElement } from '../../../../styles/reuse/FormElement.styled';
import { Label, LabelContainer } from '../../../../styles/reuse/Label.styled';
import {
  DateContainer,
  DateMonthText,
  DateYearText,
  InputButton,
  ReachDateContainer,
  ReachDateFormElementContainer,
} from './ReachDate.styled';

interface ReachDateProps {
  label: string;
  date: Date;
  onIncrement: () => void;
  onDecrement: () => void;
}

export function ReachDate(props: ReachDateProps): JSX.Element {
  const onKeyUp = (event: KeyboardEvent<HTMLDivElement>) => {
    switch (event.key) {
      case 'ArrowRight':
        props.onIncrement();
        break;
      case 'ArrowLeft':
        props.onDecrement();
        break;
    }
  };

  return (
    <ReachDateFormElementContainer>
      <LabelContainer>
        <Label>{props.label}</Label>
      </LabelContainer>
      <FormElement
        tabIndex={1}
        onKeyUp={onKeyUp}
        data-testid="reachDateContainer"
      >
        <ReachDateContainer>
          <InputButton
            data-testid="downButton"
            disabled={isNotFutureDate(getPreviousMonthDate(props.date))}
            onClick={props.onDecrement}
          >
            <ChevronLeftIcon />
          </InputButton>
          <DateContainer>
            <DateMonthText>{formatDateToLongMonth(props.date)}</DateMonthText>
            <DateYearText>{formatDateToYear(props.date)}</DateYearText>
          </DateContainer>
          <InputButton data-testid="upButton" onClick={props.onIncrement}>
            <ChevronRightIcon />
          </InputButton>
        </ReachDateContainer>
      </FormElement>
    </ReachDateFormElementContainer>
  );
}
