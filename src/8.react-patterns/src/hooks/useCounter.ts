import { useState } from 'react';

export function useCounter(
  initialCount = 0,
  options: { min?: number; max?: number } = {},
) {
  const [count, setCount] = useState(initialCount);
  const { min, max } = options;

  const increment = () =>
    setCount(c => (max !== undefined ? Math.min(max, c + 1) : c + 1));
  const decrement = () =>
    setCount(c => (min !== undefined ? Math.max(min, c - 1) : c - 1));

  return {
    count,
    increment,
    decrement,
  } as const;
}
