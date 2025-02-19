import React, { useState } from "react";

const Person = () => {
  let x = Math.floor(Math.random() * 10);
  const [count, setCount] = useState(x);
  const Calculation = () => count * count;

  return (
    <div>
      <p>Count: {count}</p>
      <p>Calculation: {Calculation(count)}</p>
      <button onClick={() => setCount(count + x)}>Random number right here</button>
      <p>Finally: {count + x}</p>
    </div>
  );
};

export default Person;
