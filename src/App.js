import "./App.css";
import SensorData from "./components/SensorData";
import Map from "./components/Map";


var GPS;
var Latitude;
var Longitude;

function App() {
  GPS = localStorage.getItem("GPS");
  Latitude = localStorage.getItem("Latitude");
  Longitude = localStorage.getItem("Longitude");

  console.log("GPS value = " + GPS);
  console.log("Latitude value = " + Latitude);
  console.log("Longitude value = " + Longitude);

  return (
    <div className="App">
      <h1>Bus Location</h1>
      <SensorData />
      <Map />

    </div>
  );
}

export default App;
