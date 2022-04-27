import NumberFormat from 'react-number-format';
import { ReactComponent as DollarSignIcon } from '../../../assets/icons/dollar-sign.svg';

interface AmountProps {
  label: string;
}
const placeholder = '1,500';

export function Amount(props: AmountProps): JSX.Element {
  return (
    <div>
      <label htmlFor="amountInput">{props.label}</label>
      <div>
        <DollarSignIcon />
        <NumberFormat thousandSeparator={true} placeholder={placeholder} />
      </div>
    </div>
  );
}