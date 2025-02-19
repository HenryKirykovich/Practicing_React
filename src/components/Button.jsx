import React, {useState} from "react";

const ButtonTask = () => {
  const[text, setText] = useState({text: "Click Me", number: 0});
   
  
  const handleClick = () => {
      setText({
        text: "Hello, React!", // Change text
        number: Math.floor(Math.random() * 10) // Generate new number
      });
    };
   

    return (
      <>
        <button onClick={handleClick}>{text.text}</button>
        <p>Random Number: {text.number}</p>
      </>
    );
  };


export default ButtonTask;












