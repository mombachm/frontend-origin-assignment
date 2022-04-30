import NumberFormat from 'react-number-format';
import { FormElement } from '../../../../styles/reuse/FormElement.styled';
import { Label, LabelContainer } from '../../../../styles/reuse/Label.styled';
import {
  AmountContainer,
  AmountFormElementContainer,
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
    <AmountFormElementContainer>
      <LabelContainer>
        <Label>{props.label}</Label>
      </LabelContainer>
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
    </AmountFormElementContainer>
  );
}
