import { Amount } from './features/savingsPlan/components/Amount';

export function App(): JSX.Element {
  return (
    <div data-testid="greetings-container">
      <Amount label="Total amount" />
    </div>
  );
}
