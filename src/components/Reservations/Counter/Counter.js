import useCounter from '../../../hooks/useCounter';

const Counter = () => {
  const { count, increment, decrementHandler, reset } = useCounter();

  return (
    <div>
      <h1>Current Count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrementHandler}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Counter;
