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
  MonthlyAmountValueHighlighted,
  MonthlyAmountValueInText,
} from '../MonthlyAmountValue/MonthlyAmountValue.styled';
import { MonthlyAmountLabel } from './MonthlyAmountInfo.styled';

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

export function MonthlyAmountInfo(props: MonthlyAmountInfoProps): JSX.Element {
  return (
    <Box>
      <HighlightedBox>
        <HighlightedElement>
          <MonthlyAmountLabel>Monthly amount</MonthlyAmountLabel>
          <MonthlyAmountValueHighlighted
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
          to reach your {<MonthlyAmountValueInText value={props.totalAmount} />}{' '}
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
