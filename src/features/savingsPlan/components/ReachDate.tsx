import { ReactComponent as ChevronRightIcon } from '../../../assets/icons/chevron-right.svg';
import { ReactComponent as ChevronLeftIcon } from '../../../assets/icons/chevron-left.svg';

interface ReachDateProps {
  label: string;
  date: Date;
}

const formatDateToMonth = (date: Date): string => {
  return date.toLocaleDateString('en-us', {
    month: 'long',
  });
};

const formatDateToYear = (date: Date): string => {
  return date.toLocaleDateString('en-us', {
    year: 'numeric',
  });
};

const isDateEqualsToCurrentMoth = (date: Date) => {
  return (
    date.getFullYear() <= new Date().getFullYear() &&
    date.getMonth() <= new Date().getMonth()
  );
};

export function ReachDate(props: ReachDateProps): JSX.Element {
  return (
    <div>
      <button
        data-testid="downButton"
        disabled={isDateEqualsToCurrentMoth(props.date)}
      >
        <ChevronLeftIcon />
      </button>
      <div>
        <span>{formatDateToMonth(props.date)}</span>
        <span>{formatDateToYear(props.date)}</span>
      </div>
      <button>
        <ChevronRightIcon />
      </button>
    </div>
  );
}
