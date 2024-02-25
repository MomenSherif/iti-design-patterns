import { withCounter } from '../hoc/withCounter';

function TestComponentHOC({
  count,
  increment,
  decrement,
  name,
}: {
  count?: number;
  increment?: () => void;
  decrement?: () => void;
  name: string;
}) {
  return (
    <div>
      <h1>TestComponent HOC {name}</h1>

      <button onClick={decrement}>-</button>
      <span>Count {count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default withCounter(TestComponentHOC);
