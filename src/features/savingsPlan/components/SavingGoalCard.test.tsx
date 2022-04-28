import { fireEvent, render, screen } from '@testing-library/react';
import { SavingGoalCard } from './SavingGoalCard';
import { ReactComponent as BuyAHouseIcon } from '../../../assets/icons/buy-a-house.svg';
import { StoreProviderWrapper } from '../../../app/StoreProviderWrapper';
import userEvent from '@testing-library/user-event';
import {
  formatDateToLongMonth,
  formatDateToYear,
} from '../../../utils/dateUtils';
import { store } from '../../../app/store';
import { selectReachDate } from '../savingsPlanSlice';

const getSavingGoalCard = () => (
  <StoreProviderWrapper>
    <SavingGoalCard
      title="Buy a house"
      subtitle="Saving goal"
      icon={<BuyAHouseIcon />}
    />
  </StoreProviderWrapper>
);

enum KeyCode {
  arrowLeft = 37,
  arrowRight = 39,
}

describe('SavingsGoalCard', () => {
  it('should display the card with title, icon and subtitle', () => {
    render(getSavingGoalCard());
    expect(screen.getByText(/Buy a house/)).toBeInTheDocument();
    expect(screen.getByText(/Saving goal/)).toBeInTheDocument();
    expect(screen.getByText(/buy-a-house.svg/)).toBeInTheDocument();
  });
  describe('ReachDate', () => {
    it('should increment the date by month when clicking on the up button', () => {
      const newDate = selectReachDate(store.getState());
      newDate.setMonth(newDate.getMonth() + 1);
      const expectedMonth = formatDateToLongMonth(newDate);
      const expectedYear = formatDateToYear(newDate);
      render(getSavingGoalCard());
      userEvent.click(screen.getByTestId('upButton'));
      expect(screen.getByText(expectedMonth)).toBeInTheDocument();
      expect(screen.getByText(expectedYear)).toBeInTheDocument();
    });
    it('should decrement the date by month when clicking on the down button', () => {
      const newDate = selectReachDate(store.getState());
      newDate.setMonth(newDate.getMonth() - 1);
      const expectedMonth = formatDateToLongMonth(newDate);
      const expectedYear = formatDateToYear(newDate);
      render(getSavingGoalCard());
      userEvent.click(screen.getByTestId('downButton'));
      expect(screen.getByText(expectedMonth)).toBeInTheDocument();
      expect(screen.getByText(expectedYear)).toBeInTheDocument();
    });
    it('should increment the date by month when focused and when the right arrow key is pressed', () => {
      const newDate = selectReachDate(store.getState());
      newDate.setMonth(newDate.getMonth() + 1);
      const expectedMonth = formatDateToLongMonth(newDate);
      const expectedYear = formatDateToYear(newDate);
      render(getSavingGoalCard());
      const container = screen.getByTestId('reachDateContainer');
      fireEvent.keyUp(container, {
        keyCode: KeyCode.arrowRight,
      });
      expect(screen.getByText(expectedMonth)).toBeInTheDocument();
      expect(screen.getByText(expectedYear)).toBeInTheDocument();
    });
    it('should decrement the date by month when focused and when the left arrow key is pressed', () => {
      const newDate = selectReachDate(store.getState());
      newDate.setMonth(newDate.getMonth() - 1);
      const expectedMonth = formatDateToLongMonth(newDate);
      const expectedYear = formatDateToYear(newDate);
      render(getSavingGoalCard());
      const container = screen.getByTestId('reachDateContainer');
      fireEvent.keyUp(container, {
        keyCode: KeyCode.arrowLeft,
      });
      expect(screen.getByText(expectedMonth)).toBeInTheDocument();
      expect(screen.getByText(expectedYear)).toBeInTheDocument();
    });
  });
  describe('MonthlyAmountInfo', () => {
    it('should display the monthly amount information', () => {
      render(getSavingGoalCard());
      expect(screen.getByText(/Monthly amount/)).toBeInTheDocument();
    });
  });
});
