import { render, screen } from '@testing-library/react';
import { AmountValue } from '.';

describe('AmountValue', () => {
  it('should display a money formatted value with 2 decimal places', () => {
    render(<AmountValue value={350000050.456} />);
    expect(screen.getByText('$350,000,050.46')).toBeInTheDocument();
  });
});
