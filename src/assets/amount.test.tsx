import Amount from './amount';
import { render, screen } from '@testing-library/react';

describe('Amount', () => {
  it('Should display amount label', () => {
    render(<Amount label="Total amount" />);
    expect(screen.getByText(/Total amount/)).toBeInTheDocument();
  });
  it('Should display amount input', () => {
    render(<Amount label="Total amount" />);
    expect(screen.getByPlaceholderText(/1,500/)).toBeInTheDocument();
  });
});
