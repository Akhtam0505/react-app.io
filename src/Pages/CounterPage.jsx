import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../action";

const CounterPage = () => {
  const counter = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter : {counter}</h1>

      <button onClick={() => dispatch(increment())}>increment</button>
      <button disabled={counter === 0} onClick={() => dispatch(decrement())}>
        decrement
      </button>
    </div>
  );
};

export default CounterPage;
