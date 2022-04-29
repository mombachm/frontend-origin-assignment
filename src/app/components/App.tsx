import { MainContainer } from './App.styled';
import { ReactComponent as BuyAHouseIcon } from '../../assets/icons/buy-a-house.svg';
import { SavingGoalCard } from '../../features/savingsPlan/components/SavingGoalCard/index';

export function App(): JSX.Element {
  return (
    <MainContainer data-testid="greetings-container">
      <SavingGoalCard
        title="Buy a house"
        subtitle="Saving goal"
        icon={<BuyAHouseIcon />}
      />
    </MainContainer>
  );
}
