import React, { useRef, useEffect, useState } from "react";

export default function UseRefComponent() {
  const [, setDummy] = useState({});
  const divRef = useRef();
  const value = useRef(0);

  const onDivBorder = () => {
    divRef.current.style.border = "1px solid black";
  };

  const onIncrease = () => {
    setDummy({});
    value.current += 1;
  };

  console.log(value);
  return (
    <div className="use-ref" ref={divRef}>
      <h3>Examples for useRef</h3>
      <div className="button-area">
        <button onClick={onIncrease}>
          Increase Ref Value: {value.current}
        </button>
        <button onClick={onDivBorder}>Div Border</button>
      </div>
    </div>
  );
}
