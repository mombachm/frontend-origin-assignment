import { SavingGoalCard } from './features/savingsPlan/components/SavingGoalCard';
import { ReactComponent as BuyAHouseIcon } from './assets/icons/buy-a-house.svg';

export function App(): JSX.Element {
  return (
    <div data-testid="greetings-container">
      <SavingGoalCard
        title="Buy a house"
        subtitle="Saving goal"
        icon={<BuyAHouseIcon />}
      />
    </div>
  );
}
