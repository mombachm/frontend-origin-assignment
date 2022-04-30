import NumberFormat from 'react-number-format';

interface MonthlyAmountValueProps {
  value: number;
  className?: string;
}

export function MonthlyAmountValue(
  props: MonthlyAmountValueProps
): JSX.Element {
  return (
    <NumberFormat
      className={props.className}
      thousandSeparator={true}
      displayType="text"
      decimalScale={2}
      prefix="$"
      value={props.value}
    />
  );
}
