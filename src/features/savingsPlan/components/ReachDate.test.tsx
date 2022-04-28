import { render, screen } from '@testing-library/react';
import { initialState } from '../savingsPlanSlice';
import { ReachDate } from './ReachDate';

describe('ReachDate', () => {
  it('should display selected date month', () => {
    render(
      <ReachDate
        label="Reach goal by"
        date={new Date('2/2/2022')}
        onIncrement={() => null}
        onDecrement={() => null}
      />
    );
    expect(screen.getByText(/February/)).toBeInTheDocument();
  });
  it('should display selected date year', () => {
    render(
      <ReachDate
        label="Reach goal by"
        date={new Date('2/2/2022')}
        onIncrement={() => null}
        onDecrement={() => null}
      />
    );
    expect(screen.getByText(/2022/)).toBeInTheDocument();
  });
  it('should disable the down button when the previous month/year is not a valid future date', () => {
    render(
      <ReachDate
        label="Reach goal by"
        date={new Date()}
        onIncrement={() => null}
        onDecrement={() => null}
      />
    );
    expect(screen.getByTestId('downButton')).toBeDisabled();
  });
  it('should enable the down button when the last month/year is a valid future date', () => {
    const date = new Date(initialState.reachDate);
    date.setMonth(date.getMonth() + 1);
    render(
      <ReachDate
        label="Reach goal by"
        date={date}
        onIncrement={() => null}
        onDecrement={() => null}
      />
    );
    expect(screen.getByTestId('downButton')).not.toBeDisabled();
  });
});
