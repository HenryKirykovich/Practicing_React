import React, {useState} from 'react';


const PushButton = ()=> {
    const [count, setCount] = useState(Math.floor(Math.random()*10));

    function action() {
        const x = Math.floor(Math.random()*10)
        setCount(count+x);
    }

    return (
        <div>
            <h1>my counter</h1>
            <button onClick={action}>PUSH ME</button>
            <p>My count is: {count}</p>
        </div>

    )
}

export default PushButton; 