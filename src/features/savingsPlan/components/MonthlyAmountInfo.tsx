import NumberFormat from 'react-number-format';
import {
  formatDateToLongMonth,
  formatDateToYear,
  getMonthDifference,
} from '../../../utils/dateUtils';

interface MonthlyAmountInfoProps {
  totalAmount: number;
  reachDate: Date;
}

const getMonthlyAmount = (totalAmount: number, reachDate: Date) => {
  return totalAmount / getMonthlyDeposits(reachDate);
};

const getMonthlyDeposits = (reachDate: Date) => {
  return getMonthDifference(new Date(), reachDate);
};

const getMoneyFormattedValue = (value: number): JSX.Element => {
  return (
    <NumberFormat
      thousandSeparator={true}
      displayType="text"
      decimalScale={2}
      prefix="$"
      value={value}
    />
  );
};

export function MonthlyAmountInfo(props: MonthlyAmountInfoProps): JSX.Element {
  return (
    <div>
      <div>
        <span>Monthly amount</span>
        <span>
          {getMoneyFormattedValue(
            getMonthlyAmount(props.totalAmount, props.reachDate)
          )}
        </span>
      </div>
      <div>
        <span>
          You are planning {getMonthlyDeposits(props.reachDate)} monthly
          deposits to reach your {getMoneyFormattedValue(props.totalAmount)}{' '}
          goal by {formatDateToLongMonth(props.reachDate)}{' '}
          {formatDateToYear(props.reachDate)}.
        </span>
      </div>
    </div>
  );
}
