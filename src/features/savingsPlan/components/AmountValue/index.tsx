import NumberFormat from 'react-number-format';

interface AmountValueProps {
  value: number;
  className?: string;
  dataTestId?: string;
}

export function AmountValue(props: AmountValueProps): JSX.Element {
  return (
    <NumberFormat
      data-testid={props.dataTestId}
      className={props.className}
      thousandSeparator={true}
      displayType="text"
      decimalScale={2}
      prefix="$"
      value={props.value}
    />
  );
}
