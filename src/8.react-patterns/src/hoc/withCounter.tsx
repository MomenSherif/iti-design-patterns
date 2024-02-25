import React, { useState } from 'react';

export function withCounter<T>(WrappedComponent: React.ComponentType<T>) {
  return function (props: React.ComponentProps<typeof WrappedComponent>) {
    const [count, setCount] = useState(0);

    const increment = () => setCount(c => c + 1);
    const decrement = () => setCount(c => c - 1);

    return (
      <>
        <WrappedComponent
          {...props}
          count={count}
          increment={increment}
          decrement={decrement}
        />
      </>
    );
  };
}
