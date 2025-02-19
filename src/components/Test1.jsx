import { useState } from "react";

const fruits = ["Juice", "Orange", "Cherry"];

const Test1 = () => {
  const [show, setShow] = useState([]); 

  const showlist = () => {
    setShow(fruits)

  }
  return (
    <>
      <h2>Fruit List:</h2>
      <button onClick={showlist}>SHOW ME</button>
        <ul>
            {show.map((item,index)=> (
            <li key={index}>{index+1} : {item}</li>))}
        </ul>
    </>
  );
};

export default Test1;
