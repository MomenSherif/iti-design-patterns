import { useCounter } from './useCounter';

export function useStepper<TData>(data: TData[]) {
  const { count, increment, decrement } = useCounter(0, {
    min: 0,
    max: data.length - 1,
  });

  return {
    current: data[count],
    currentIndex: count,
    next: increment,
    prev: decrement,
  };
}
