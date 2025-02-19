import React, { useState} from "react";

const Counter = () => {
    const [count, setCount]=useState(0);

    return (
        <>
            <p>Counter:  {count}</p>
            <button onClick={() => setCount(count+1)}>+</button>
            <button onClick={() => setCount(count-1)}>-</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </>
    )
}

export default Counter;

