import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../../../app/hooks';
import { Card } from '../../../../styles/reuse/Card.styled';
import {
  decrementReachDate,
  incrementReachDate,
  selectAmount,
  selectReachDate,
  updateAmount,
} from '../../savingsPlanSlice';
import { Amount } from '../Amount';
import { MonthlyAmountInfo } from '../MonthlyAmountInfo';
import { ReachDate } from '../ReachDate';

interface SavingGoalCardProps {
  title: string;
  subtitle: string;
  icon?: React.ReactNode;
}

export function SavingGoalCard(props: SavingGoalCardProps): JSX.Element {
  const dispatch = useAppDispatch();
  const reachDate = useSelector(selectReachDate);
  const amount = useSelector(selectAmount);

  return (
    <Card>
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
      </div>
      <MonthlyAmountInfo reachDate={reachDate} totalAmount={amount} />
      <button>Confirm</button>
    </Card>
  );
}
