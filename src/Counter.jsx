import React from "react";
import { CounterContext } from "./context/Counter";
import { useContext } from "react";
function Counter() {
  const { count, setCount } = useContext(CounterContext);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <button style={{backgroundColor:'lightblue'}} onClick={handleIncrement}>Increment</button>
      <button style={{backgroundColor:'red'}} onClick={handleDecrement}>Decrement</button>
    </div>
  );
}

export default Counter;
