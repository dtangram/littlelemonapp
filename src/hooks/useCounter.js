import { useState } from 'react';

const useCounter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  const reset = () => {
    setCount(0);
  };

  const canDecrement = count > 0;
  const decrementHandler = canDecrement ? decrement : undefined;

  return { count, increment, decrementHandler, reset };
};

export default useCounter;