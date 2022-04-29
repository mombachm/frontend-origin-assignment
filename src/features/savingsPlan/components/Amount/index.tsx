import NumberFormat from 'react-number-format';
import { FormElement } from '../../../../styles/reuse/FormElement.styled';
import {
  AmountContainer,
  AmountInputStyled,
  DollarSignIcon,
} from './Amount.styled';

interface AmountProps {
  label: string;
  onValueChange: (value?: number) => void;
}

export const amountInputPlaceholder = '1,500';

export function Amount(props: AmountProps): JSX.Element {
  return (
    <>
      <span>{props.label}</span>
      <FormElement>
        <AmountContainer>
          <DollarSignIcon />
          <NumberFormat
            thousandSeparator={true}
            placeholder={amountInputPlaceholder}
            customInput={AmountInputStyled}
            onValueChange={(value) => {
              props.onValueChange(value.floatValue);
            }}
          />
        </AmountContainer>
      </FormElement>
    </>
  );
}
