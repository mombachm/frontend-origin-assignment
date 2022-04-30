import { render, screen } from '@testing-library/react';
import { initialState } from '../../savingsPlanSlice';
import { ReachDateFormElement } from './index';

const getReachDateComponent = (reachDate: Date): JSX.Element => {
  return (
    <ReachDateFormElement
      date={reachDate}
      onIncrement={() => null}
      onDecrement={() => null}
    />
  );
};

describe('ReachDate', () => {
  it('should display selected date month', () => {
    render(getReachDateComponent(new Date('2/2/2022')));
    expect(screen.getByText(/February/)).toBeInTheDocument();
  });
  it('should display selected date year', () => {
    render(getReachDateComponent(new Date('2/2/2022')));
    expect(screen.getByText(/2022/)).toBeInTheDocument();
  });
  it('should disable the down button when the previous month/year is not a valid future date', () => {
    render(getReachDateComponent(new Date()));
    expect(screen.getByTestId('downButton')).toBeDisabled();
  });
  it('should enable the down button when the last month/year is a valid future date', () => {
    const date = new Date(initialState.reachDate);
    date.setMonth(date.getMonth() + 1);
    render(getReachDateComponent(date));
    expect(screen.getByTestId('downButton')).not.toBeDisabled();
  });
});
