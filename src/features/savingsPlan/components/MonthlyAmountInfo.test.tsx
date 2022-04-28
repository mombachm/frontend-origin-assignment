import { render, screen } from '@testing-library/react';
import { getByTextContent } from '../../../test/test.helper';
import {
  formatDateToLongMonth,
  formatDateToYear,
} from '../../../utils/dateUtils';
import { initialState } from '../savingsPlanSlice';
import { MonthlyAmountInfo } from './MonthlyAmountInfo';

describe('MonthlyAmountInfo', () => {
  it('should display the monthly deposits amount based on the total amount goal and the reach date', () => {
    const reachDate = new Date(initialState.reachDate);
    reachDate.setMonth(reachDate.getMonth() + 6);
    render(<MonthlyAmountInfo totalAmount={5500} reachDate={reachDate} />);
    expect(screen.getByText(/Monthly amount/)).toBeInTheDocument();
    expect(screen.getByText(/\$785.71/)).toBeInTheDocument();
  });
  it('should display the number of monthly deposits, the total amount goal and the reach date', () => {
    const reachDate = new Date(initialState.reachDate);
    reachDate.setMonth(reachDate.getMonth() + 6);
    render(<MonthlyAmountInfo totalAmount={5500.45} reachDate={reachDate} />);
    expect(
      getByTextContent(
        `You are planning 7 monthly deposits to reach your $5,500.45 goal by ${formatDateToLongMonth(
          reachDate
        )} ${formatDateToYear(reachDate)}`
      )
    );
  });
});
