import { MainContainer } from './App.styled';
import { ReactComponent as BuyAHouseIcon } from '../../assets/icons/buy-a-house.svg';
import { ReactComponent as OriginLogoIcon } from '../../assets/icons/origin-logo.svg';

import { SavingGoalCard } from '../../features/savingsPlan/components/SavingGoalCard/index';
import { Header } from './Header';

export function App(): JSX.Element {
  return (
    <>
      <Header icon={<OriginLogoIcon />} />
      <MainContainer data-testid="greetings-container">
        <SavingGoalCard
          title="Buy a house"
          subtitle="Saving goal"
          icon={<BuyAHouseIcon />}
        />
      </MainContainer>
    </>
  );
}
