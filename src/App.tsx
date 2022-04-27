import { Amount } from './features/savingsPlan/components/Amount';
import { ReachDate } from './features/savingsPlan/components/ReachDate';

export function App(): JSX.Element {
  return (
    <div data-testid="greetings-container">
      <Amount label="Total amount" />
      <ReachDate label="Reach date" date={new Date()} />
    </div>
  );
}
