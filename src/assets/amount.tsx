import { FC } from 'react';
import NumberFormat from 'react-number-format';

type AmountProps = { label: string };
const placeholder = '1,500';

const amount: FC<AmountProps> = (props: AmountProps) => {
  return (
    <div>
      <label htmlFor="amountInput">{props.label}</label>
      <NumberFormat
        id="amountInput"
        thousandSeparator={true}
        placeholder={placeholder}
      />
    </div>
  );
};
export default amount;
