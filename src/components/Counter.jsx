import React, { useContext } from "react";
import { CounterContext } from "../context/Counterc";

const Counter = () => {
  const counterState = useContext(CounterContext);
  const onIncrement = () => {
    counterState.setCount(counterState.count + 1);
  };
  const onDecrement = () => {
    counterState.setCount(counterState.count - 1);
  };

  return (
    <div>
      <button onClick={onIncrement}>Increment</button>
      <span> </span>
      <button onClick={onDecrement}>Decrement</button>
    </div>
  );
};

export default Counter;
