import { FC } from 'react';
import NumberFormat from 'react-number-format';
import { ReactComponent as DollarSignIcon } from '../../../assets/icons/dollar-sign.svg';

type AmountProps = { label: string };
const placeholder = '1,500';

const amount: FC<AmountProps> = (props: AmountProps) => {
  return (
    <div>
      <label htmlFor="amountInput">{props.label}</label>
      <div>
        <DollarSignIcon />
        <NumberFormat thousandSeparator={true} placeholder={placeholder} />
      </div>
    </div>
  );
};
export default amount;
