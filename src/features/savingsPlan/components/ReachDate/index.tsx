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
    <>
      <span>{props.label}</span>
      <FormElement
        tabIndex={1}
        onKeyUp={onKeyUp}
        data-testid="reachDateContainer"
      >
        <button
          data-testid="downButton"
          disabled={isNotFutureDate(getPreviousMonthDate(props.date))}
          onClick={props.onDecrement}
        >
          <ChevronLeftIcon />
        </button>
        <div>
          <span>{formatDateToLongMonth(props.date)}</span>
          <span>{formatDateToYear(props.date)}</span>
        </div>
        <button data-testid="upButton" onClick={props.onIncrement}>
          <ChevronRightIcon />
        </button>
      </FormElement>
    </>
  );
}
