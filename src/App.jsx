import { useState } from "react";
import "./App.css"; 
import "./components/ToggleButton";
import ToggleButton from "./components/ToggleButton";
import CounterReset from "./components/CounterReset";
import ReminderList from "./components/AddRemoveItems";
import PushButton from "./components/PushButton";
import ShowAddList from "./components/ShowAddList";
import Test1 from "./components/Test1";



function App() {
  return (
    <div>
      <h1>React Button Hover Test</h1>
      <ToggleButton/>
      <br></br>
      <CounterReset/>
      <br></br>
      <br></br>
      <ReminderList/>
      <br></br>
      <br></br>
      <PushButton/>
      <br></br>
      <br></br>
      <ShowAddList/>
      <Test1/>
    </div>
  );
}

export default App;
