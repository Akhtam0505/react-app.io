import { useState } from "react";
import "./styles.css";
import React from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };
  return (
    <div className="container">
      <button onClick={increment}>+</button>
      <p>{count}</p>
      <button onClick={decrement} disabled={count === 0}>
        -
      </button>
    </div>
  );
};

export default Counter;
