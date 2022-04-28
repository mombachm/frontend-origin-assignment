import { Amount, amountInputPlaceholder } from './Amount';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const getAmountComponent = () => (
  <Amount label="Total amount" onValueChange={() => null} />
);

describe('Amount', () => {
  it('should display amount label', () => {
    render(getAmountComponent());
    expect(screen.getByText(/Total amount/)).toBeInTheDocument();
  });
  it('should display amount input', () => {
    render(getAmountComponent());
    expect(
      screen.getByPlaceholderText(amountInputPlaceholder)
    ).toBeInTheDocument();
  });
  it('should allow only numbers', () => {
    render(getAmountComponent());
    const amountInput = screen.getByPlaceholderText(amountInputPlaceholder);
    userEvent.type(amountInput, 'abc');
    expect(amountInput).toHaveValue('');
  });
  it('should format the value as money', () => {
    render(getAmountComponent());
    const amountInput = screen.getByPlaceholderText(amountInputPlaceholder);
    userEvent.type(amountInput, '350000050');
    expect(amountInput).toHaveValue('350,000,050');
  });
  it('should format the value as money with decimal separator', () => {
    render(getAmountComponent());
    const amountInput = screen.getByPlaceholderText(amountInputPlaceholder);
    userEvent.type(amountInput, '3500000.50');
    expect(amountInput).toHaveValue('3,500,000.50');
  });
});
