import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../../../app/hooks';
import { ActionButton } from '../../../../styles/reuse/Buttons.styled';
import {
  Card,
  CardDescription,
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
import { SemiBoldSpan } from '../../../../styles/reuse/Typography.styled';
import {
  decrementReachDate,
  incrementReachDate,
  selectAmount,
  selectReachDate,
  updateAmount,
} from '../../savingsPlanSlice';
import { Amount } from '../Amount';
import { MonthlyAmountInfo } from '../MonthlyAmountInfo';
import { ReachDateFormElement } from '../ReachDate';

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
    <>
      <CardDescription>
        Lets plan your <SemiBoldSpan>saving goal</SemiBoldSpan>.
      </CardDescription>
      <Card>
        <CardHeader>
          <div>{props.icon}</div>
          <CardHeaderInfo>
            <H2>{props.title}</H2>
            <H4>{props.subtitle}</H4>
          </CardHeaderInfo>
        </CardHeader>
        <FormContainer>
          <FormElementContainer flex={1.5}>
            <LabelContainer>
              <Label>Total amount</Label>
            </LabelContainer>
            <FormElement>
              <Amount
                onValueChange={(value) => {
                  dispatch(updateAmount(value));
                }}
              />
            </FormElement>
          </FormElementContainer>

          <FormElementContainer>
            <LabelContainer>
              <Label>Reach goal by</Label>
            </LabelContainer>
            <ReachDateFormElement
              date={reachDate}
              onIncrement={() => {
                dispatch(incrementReachDate());
              }}
              onDecrement={() => {
                dispatch(decrementReachDate());
              }}
            />
          </FormElementContainer>
        </FormContainer>
        <MonthlyAmountInfo reachDate={reachDate} totalAmount={amount} />
        <CardFooter>
          <ActionButton tabIndex={0}>Confirm</ActionButton>
        </CardFooter>
      </Card>
    </>
  );
}
