import { useRef } from 'react';
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
  const amountInput = useRef<HTMLInputElement>(null);

  return (
    <AmountContainer
      onClick={() => {
        if (amountInput.current) amountInput.current.focus();
      }}
    >
      <DollarSignIcon />
      <NumberFormat
        getInputRef={amountInput}
        thousandSeparator={true}
        placeholder={amountInputPlaceholder}
        customInput={AmountInputStyled}
        onValueChange={(value) => {
          props.onValueChange(value.floatValue ? value.floatValue : 0);
        }}
      />
    </AmountContainer>
  );
}
