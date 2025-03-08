
import { useState } from "react";

const WEATHER_URL = "https://api.openweathermap.org/data/2.5/weather";
const WEATHER_API = "6b1fde950d44075d8b55708174adb5c7";



const WeatherComponent =()=>{

    const [coordinates, setCoordinates] = useState(null)
    const [error, setError] = useState("");
    const [city, setCity]= useState([])


    const MyCoordinate = () => {
        fetch(`${WEATHER_URL}?q=${city}&appid=${WEATHER_API}`)
          .then((res) => res.json())
          .then((data) => {
            if (data.cod === "404") { // ❌ If city is not found
              setCoordinates(null);
              setError("Sorry, your city has not been found.");
            } else {
              setCoordinates(data.coord);
              setError(""); // ✅ Clear previous errors
            }
          })
          .catch(() => {
            setCoordinates(null);
            setError("Failed to fetch data. Please try again.");
          });
      }; 
    

    return (
        <>
      <h1>This is the city {city} coordinates:</h1>

      <input type="text" value={city} onChange={(e)=>setCity(e.target.value)}/>
      <button onClick={MyCoordinate}>Check coordinates for {city}</button>

      {coordinates ? ( // ✅ Check if coordinates exist
        <ul>
          <li>Latitude: {coordinates.lat}</li>
          <li>Longitude: {coordinates.lon}</li>
        </ul>
      ) : null}
      
      {!coordinates && error && <h2 style={{ color: "red" }}>{error}</h2>}

    
    </>
                                     
    );

};


export default WeatherComponent;