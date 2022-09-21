import React from 'react';
import { Plus, Minus } from 'assets/icons/PlusMinus';
import { CounterBox, CounterButton, CounterValue } from './counter.style';
interface Props {
  onDecrement: (e: Event) => void;
  onIncrement: (e: Event) => void;
  value: number;
  variant?: string;
  className?: string;
  shouldDisabledOnOne?: boolean;
}

export const Counter: React.FC<Props> = ({
  onDecrement,
  onIncrement,
  value,
  variant,
  className,
  shouldDisabledOnOne
}) => {
  return (
    <CounterBox variant={variant} className={className}>
      <CounterButton disabled={value === 1 && shouldDisabledOnOne} onClick={onDecrement} variant={variant}>
        <Minus />
      </CounterButton>
      <CounterValue>{value}</CounterValue>
      <CounterButton onClick={onIncrement} variant={variant}>
        <Plus />
      </CounterButton>
    </CounterBox>
  );
};
