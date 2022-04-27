import { Amount } from './Amount';
import { ReachDate } from './ReachDate';

interface SavingGoalCardProps {
  title: string;
  subtitle: string;
  icon?: React.ReactNode;
}

export function SavingGoalCard(props: SavingGoalCardProps): JSX.Element {
  return (
    <div>
      <div>
        {props.icon}
        <h2>{props.title}</h2>
        <h4>{props.subtitle}</h4>
      </div>
      <div>
        <Amount label="Total amount" />
        <ReachDate label="Reach date" date={new Date()} />
        <button>Confirm</button>
      </div>
    </div>
  );
}
