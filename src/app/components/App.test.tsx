import { App } from './App';
import { render, screen } from '@testing-library/react';
import { StoreProviderWrapper } from '../StoreProviderWrapper';
import userEvent from '@testing-library/user-event';
import { amountInputPlaceholder } from '../../features/savingsPlan/components/Amount';
import { getByTextContent } from '../../test/test.helper';
import { selectReachDate } from '../../features/savingsPlan/savingsPlanSlice';
import { store } from '../store';
import { formatDateToLongMonth, formatDateToYear } from '../../utils/dateUtils';

describe('App', () => {
  it('should display the right initial amounts and dates', () => {
    render(
      <StoreProviderWrapper>
        <App />
      </StoreProviderWrapper>
    );
    expect(screen.queryByTestId('monthlyAmountValue')).toHaveTextContent('$0');
    const reachDate = selectReachDate(store.getState());
    expect(
      getByTextContent(
        `You are planning 1 monthly deposits to reach your $0 goal by ${formatDateToLongMonth(
          reachDate
        )} ${formatDateToYear(reachDate)}.`
      )
    );
  });
  it('should display the right saving goal amounts and data according to user input data', () => {
    render(
      <StoreProviderWrapper>
        <App />
      </StoreProviderWrapper>
    );
    const amountInput = screen.getByPlaceholderText(amountInputPlaceholder);
    userEvent.click(amountInput);
    userEvent.type(amountInput, '5000000');
    const upDateButton = screen.getByTestId('upButton');
    userEvent.click(upDateButton);
    userEvent.click(upDateButton);
    expect(screen.queryByTestId('monthlyAmountValue')).toHaveTextContent(
      '$1,666,666.67'
    );
    const reachDate = selectReachDate(store.getState());
    expect(
      getByTextContent(
        `You are planning 3 monthly deposits to reach your $5,000,000 goal by ${formatDateToLongMonth(
          reachDate
        )} ${formatDateToYear(reachDate)}.`
      )
    );
  });
});
