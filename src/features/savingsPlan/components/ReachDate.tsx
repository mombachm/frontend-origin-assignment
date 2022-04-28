import { ReactComponent as ChevronRightIcon } from '../../../assets/icons/chevron-right.svg';
import { ReactComponent as ChevronLeftIcon } from '../../../assets/icons/chevron-left.svg';
import {
  formatDateToLongMonth,
  formatDateToYear,
  getPreviousMonthDate,
  isNotFutureDate,
} from '../../../utils/dateUtils';

interface ReachDateProps {
  label: string;
  date: Date;
  onIncrement: () => void;
  onDecrement: () => void;
}

export function ReachDate(props: ReachDateProps): JSX.Element {
  return (
    <div>
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
    </div>
  );
}
