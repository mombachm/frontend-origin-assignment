import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../../../app/hooks';
import { ActionButton } from '../../../../styles/reuse/Buttons.styled';
import {
  Card,
  CardFooter,
  CardHeader,
  CardHeaderInfo,
} from '../../../../styles/reuse/Card.styled';
import { FormContainer } from '../../../../styles/reuse/FormContainer.styled';
import {
  FormElement,
  FormElementContainer,
} from '../../../../styles/reuse/FormElement.styled';
import { H2, H4 } from '../../../../styles/reuse/Heading.styled';
import { Label, LabelContainer } from '../../../../styles/reuse/Label.styled';
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
      <CardHeader>
        <div>{props.icon}</div>
        <CardHeaderInfo>
          <H2>{props.title}</H2>
          <H4>{props.subtitle}</H4>
        </CardHeaderInfo>
      </CardHeader>
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
        <FormElementContainer>
          <LabelContainer>
            <Label>Teste</Label>
          </LabelContainer>
          <FormElement>Teste</FormElement>
        </FormElementContainer>
      </FormContainer>
      <MonthlyAmountInfo reachDate={reachDate} totalAmount={amount} />
      <CardFooter>
        <ActionButton>Confirm</ActionButton>
      </CardFooter>
    </Card>
  );
}
