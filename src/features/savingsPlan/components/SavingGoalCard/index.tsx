import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../../../app/hooks';
import { ActionButton } from '../../../../styles/reuse/Buttons.styled';
import { Card } from '../../../../styles/reuse/Card.styled';
import { FormContainer } from '../../../../styles/reuse/FormContainer.styled';
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
      <FormContainer>
        <Amount
          label="Total amount"
          onValueChange={(value) => {
            dispatch(updateAmount(value));
          }}
        />
        <ReachDate
          label="Reach goal by"
          date={reachDate}
          onIncrement={() => {
            dispatch(incrementReachDate());
          }}
          onDecrement={() => {
            dispatch(decrementReachDate());
          }}
        />
      </FormContainer>
      <MonthlyAmountInfo reachDate={reachDate} totalAmount={amount} />
      <ActionButton>Confirm</ActionButton>
    </Card>
  );
}
