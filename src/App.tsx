import Amount from './assets/amount';

export function App(): JSX.Element {
  return (
    <div data-testid="greetings-container">
      <Amount label="Teste" />
    </div>
  );
}
