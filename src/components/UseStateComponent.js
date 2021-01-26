import React, { useState } from "react";

export default function UseStateComponent() {
  const [counter, setCounter] = useState(0);

  const increase = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <h3>Examples for useState</h3>
      <p>{counter}</p>
      <button onClick={increase}>Increase</button>
    </div>
  );
}
