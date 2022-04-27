import Amount from './features/savingsPlan/components/amount';

export function App(): JSX.Element {
  return (
    <div data-testid="greetings-container">
      <Amount label="Total amount" />
    </div>
  );
}
