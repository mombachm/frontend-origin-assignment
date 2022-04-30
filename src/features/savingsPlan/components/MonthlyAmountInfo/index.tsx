import {
  Box,
  HighlightedBox,
  HighlightedElement,
  TextBox,
} from '../../../../styles/reuse/Box.styled';
import { SemiBoldSpan } from '../../../../styles/reuse/Typography.styled';
import {
  formatDateToLongMonth,
  formatDateToYear,
  getMonthDifference,
} from '../../../../utils/dateUtils';
import {
  AmountValueHighlighted,
  AmountValueInText,
} from '../MonthlyAmountValue/MonthlyAmountValue.styled';
import { MonthlyAmountLabel } from './MonthlyAmountInfo.styled';

interface MonthlyAmountInfoProps {
  totalAmount: number;
  reachDate: Date;
}

const getMonthlyAmount = (totalAmount: number, reachDate: Date) => {
  const monthlyDeposits = getMonthlyDeposits(reachDate);
  if (!totalAmount || !monthlyDeposits) return 0;
  return totalAmount / monthlyDeposits;
};

const getMonthlyDeposits = (reachDate: Date) => {
  return getMonthDifference(new Date(), reachDate);
};

export function MonthlyAmountInfo(props: MonthlyAmountInfoProps): JSX.Element {
  return (
    <Box>
      <HighlightedBox>
        <HighlightedElement>
          <MonthlyAmountLabel>Monthly amount</MonthlyAmountLabel>
          <AmountValueHighlighted
            dataTestId="monthlyAmountValue"
            value={getMonthlyAmount(props.totalAmount, props.reachDate)}
          />
        </HighlightedElement>
      </HighlightedBox>
      <TextBox>
        <span>
          You are planning{' '}
          {
            <SemiBoldSpan>
              {getMonthlyDeposits(props.reachDate)} monthly deposits
            </SemiBoldSpan>
          }{' '}
          to reach your{' '}
          {
            <AmountValueInText
              dataTestId="totalAmountValue"
              value={props.totalAmount}
            />
          }{' '}
          goal by{' '}
          {
            <SemiBoldSpan>
              {formatDateToLongMonth(props.reachDate)}{' '}
              {formatDateToYear(props.reachDate)}
            </SemiBoldSpan>
          }
          .
        </span>
      </TextBox>
    </Box>
  );
}
