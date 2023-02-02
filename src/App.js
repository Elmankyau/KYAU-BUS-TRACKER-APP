import './App.css';
import SensorData from './components/SensorData';
import Map from './components/Map';

var GPS;
var Latitude;
var Longitude;

function App() {
  GPS = localStorage.getItem('GPS');
  Latitude = localStorage.getItem('Latitude');
  Longitude = localStorage.getItem('Longitude');

  console.log("GPS value = " + GPS);
  console.log("Latitude value = " + Latitude);
  console.log("Longitude value = " + Longitude);

  return (
    <div className="App">
       <h1>Bus Location</h1>
       <SensorData/>

       {/* <a
          className="App-link"
          href="https://console.firebase.google.com/u/1/project/dht-11-7fe63/database/dht-11-7fe63-default-rtdb/data"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit firebase
        </a> */}

       <Map lat ={parseFloat(Latitude)} lng ={parseFloat(Longitude)}/>

    </div>
  );
}

export default App;
