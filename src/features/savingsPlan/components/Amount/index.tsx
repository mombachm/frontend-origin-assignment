import NumberFormat from 'react-number-format';
import {
  AmountContainer,
  AmountInputStyled,
  DollarSignIcon,
} from './Amount.styled';

interface AmountProps {
  onValueChange: (value?: number) => void;
}

export const amountInputPlaceholder = '1,500';

export function Amount(props: AmountProps): JSX.Element {
  return (
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
  );
}
