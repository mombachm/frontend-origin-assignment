import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../../app/hooks';
import {
  decrementReachDate,
  incrementReachDate,
  selectReachDate,
  updateAmount,
} from '../savingsPlanSlice';
import { Amount } from './Amount';
import { ReachDate } from './ReachDate';

interface SavingGoalCardProps {
  title: string;
  subtitle: string;
  icon?: React.ReactNode;
}

export function SavingGoalCard(props: SavingGoalCardProps): JSX.Element {
  const dispatch = useAppDispatch();
  const reachDate = useSelector(selectReachDate);

  return (
    <div>
      <div>
        {props.icon}
        <h2>{props.title}</h2>
        <h4>{props.subtitle}</h4>
      </div>
      <div>
        <Amount
          label="Total amount"
          onValueChange={(value) => {
            dispatch(updateAmount(value));
          }}
        />
        <ReachDate
          label="Reach date"
          date={reachDate}
          onIncrement={() => {
            dispatch(incrementReachDate());
          }}
          onDecrement={() => {
            dispatch(decrementReachDate());
          }}
        />
        <button>Confirm</button>
      </div>
    </div>
  );
}
