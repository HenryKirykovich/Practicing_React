import "./App.css"; 
import "./components/ToggleButton";
import ToggleButton from "./components/ToggleButton";
import CounterReset from "./components/CounterReset";
import ReminderList from "./components/AddRemoveItems";
import PushButton from "./components/PushButton";
import ShowAddList from "./components/ShowAddList";
import Test1 from "./components/Test1";
import  LastFmMusicPlayer from "./components/LastFmMusic"
import WeatherComponent from "./components/MyAlbumFetsh"



function App() {
  return (
    <div>
      <h1>React Test</h1>
      {/* <ToggleButton/> */}
      {/* <br></br> */}
      {/* <CounterReset/> */}
      {/* <br></br> */}
      {/* <br></br> */}
      {/* <ReminderList/> */}
      {/* <br></br> */}
      {/* <br></br> */}
      {/* <PushButton/> */}
      {/* <br></br> */}
      {/* <br></br> */}
      {/* <ShowAddList/> */}
      {/* <Test1/> */}
      <LastFmMusicPlayer/>
      {/* <WeatherComponent/> */}

    </div>
  );
}

export default App;
