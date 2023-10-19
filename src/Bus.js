import "./App.css";
import SensorData from "./components/SensorData";
import Map from "./components/Map";
import Nav from "./components/nav";

var GPS;
var Latitude;
var Longitude;

function Bus() {
  GPS = localStorage.getItem("GPS");
  Latitude = localStorage.getItem("Latitude");
  Longitude = localStorage.getItem("Longitude");

  console.log("GPS value = " + GPS);
  console.log("Latitude value = " + Latitude);
  console.log("Longitude value = " + Longitude);

  return (
    <>
      <Nav />
    
        
     <div className="container">
     
     <div className="App">
        <h1 className="text-light">Bus Location</h1>

        <div className="row justify-content-center equal ">
          <div
            className="card  col-sm-4 d-flex m-4"
            style={{ width: "25rem" , height:"30rem"}}
          >
            <h3>Zenin</h3>
            <SensorData />
            <Map />
          </div>
          <div
            className="card  col-sm-4 d-flex m-4"
            style={{ width: "25rem" , height:"30rem"}}
          >
            <h3>Sirajganj Express</h3>
            <SensorData />
            <Map />
          </div>
          <div
            className="card  col-sm-4 d-flex m-4"
            style={{ width: "25rem" , height:"30rem"}}
          >
            <h3>Zenin</h3>
            <SensorData />
            <Map />
          </div>
          
          <div
            className="card  col-sm-4 d-flex m-4"
            style={{ width: "25rem" , height:"30rem"}}
          >
            <h3>Starlite</h3>
            <SensorData />
            <Map />
          </div>
          <div
            className="card  col-sm-4 d-flex m-4"
            style={{ width: "25rem" , height:"30rem"}}
          >
            <h3>Zenin</h3>
            <SensorData />
            <Map />
          </div>
          <div
            className="card  col-sm-4 d-flex m-4"
            style={{ width: "25rem" , height:"30rem"}}
          >
            <h3>SI Paribahan</h3>
            <SensorData />
            <Map />
          </div>
          

        </div>
       
      </div>
     </div>
      
    </>
  );
}

export default Bus;
