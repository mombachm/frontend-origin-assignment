import Amount from './amount';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const amountInputPlaceholder = '1,500';

describe('Amount', () => {
  it('Should display amount label', () => {
    render(<Amount label="Total amount" />);
    expect(screen.getByText(/Total amount/)).toBeInTheDocument();
  });
  it('Should display amount input', () => {
    render(<Amount label="Total amount" />);
    expect(
      screen.getByPlaceholderText(amountInputPlaceholder)
    ).toBeInTheDocument();
  });
  it('Should allow only numbers', () => {
    render(<Amount label="Total amount" />);
    const amountInput = screen.getByPlaceholderText(amountInputPlaceholder);
    userEvent.type(amountInput, 'abc');
    expect(amountInput).toHaveValue('');
  });
  it('Should format the value as money', () => {
    render(<Amount label="Total amount" />);
    const amountInput = screen.getByPlaceholderText(amountInputPlaceholder);
    userEvent.type(amountInput, '350000050');
    expect(amountInput).toHaveValue('350,000,050');
  });
  it('Should format the value as money with decimal separator', () => {
    render(<Amount label="Total amount" />);
    const amountInput = screen.getByPlaceholderText(amountInputPlaceholder);
    userEvent.type(amountInput, '3500000.50');
    expect(amountInput).toHaveValue('3,500,000.50');
  });
});
