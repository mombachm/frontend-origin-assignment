import { Box, TextBox } from '../../../../styles/reuse/Box.styled';
import {
  HighlightedBox,
  HighlightedElement,
} from '../../../../styles/reuse/HighlightedBox';
import { HighlightedLabel } from '../../../../styles/reuse/Label.styled';
import { SemiBoldSpan } from '../../../../styles/reuse/Typography.styled';
import {
  formatDateToLongMonth,
  formatDateToYear,
  getMonthDifference,
} from '../../../../utils/dateUtils';
import {
  AmountValueHighlighted,
  AmountValueInText,
} from '../AmountValue/AmountValue.styled';

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
          <HighlightedLabel>Monthly amount</HighlightedLabel>
          <AmountValueHighlighted
            dataTestId="monthlyAmountValue"
            value={getMonthlyAmount(props.totalAmount, props.reachDate)}
          />
        </HighlightedElement>
      </HighlightedBox>
      <TextBox>
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
      </TextBox>
    </Box>
  );
}
