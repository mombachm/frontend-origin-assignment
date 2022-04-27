import { render, screen } from '@testing-library/react';
import { SavingGoalCard } from './SavingGoalCard';
import { ReactComponent as BuyAHouseIcon } from '../../../assets/icons/buy-a-house.svg';

describe('SavingsGoalCard', () => {
  it('should display the card with title, icon and subtitle', () => {
    render(
      <SavingGoalCard
        title="Buy a house"
        subtitle="Saving goal"
        icon={<BuyAHouseIcon />}
      />
    );
    expect(screen.getByText(/Buy a house/)).toBeInTheDocument();
    expect(screen.getByText(/Saving goal/)).toBeInTheDocument();
    expect(screen.getByText(/buy-a-house.svg/)).toBeInTheDocument();
  });
});
