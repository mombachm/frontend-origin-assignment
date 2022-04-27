import { render, screen } from '@testing-library/react';
import { ReachDate } from './ReachDate';

describe('ReachDate', () => {
  it('should display selected date month', () => {
    render(<ReachDate label="Reach goal by" date={new Date('2/2/2022')} />);
    expect(screen.getByText(/February/)).toBeInTheDocument();
  });
  it('should display selected date year', () => {
    render(<ReachDate label="Reach goal by" date={new Date('2/2/2022')} />);
    expect(screen.getByText(/2022/)).toBeInTheDocument();
  });
  it('should disable the down button when selected month/year is less or equals to the current month/year', () => {
    render(<ReachDate label="Reach goal by" date={new Date()} />);
    expect(screen.getByTestId('downButton')).toBeDisabled();
  });
  it('should enable the down button when selected month/year is greater than the current month/year', () => {
    const date = new Date();
    date.setMonth(date.getMonth() + 1);
    render(<ReachDate label="Reach goal by" date={date} />);
    expect(screen.getByTestId('downButton')).not.toBeDisabled();
  });
});
