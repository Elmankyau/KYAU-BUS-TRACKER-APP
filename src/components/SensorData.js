import axios from "axios";

// var GPS;
// var Latitude;+
// var Longitude;

function SensorData() {
  axios
    .get("https://dht-11-7fe63-default-rtdb.firebaseio.com/Location.json")
    .then((response) => {
    //   console.log(response.data);
      localStorage.removeItem("GPS");
      localStorage.removeItem("Latitude");
      localStorage.removeItem("Longitude");
      localStorage.setItem("GPS", JSON.stringify(response.data));
      localStorage.setItem("Latitude", JSON.stringify(response.data.Latitude));
      localStorage.setItem("Longitude", JSON.stringify(response.data.Longitude));

    //   GPS = response.data;
    //   Latitude = response.data.Latitude;
    //   console.log("Latitude = " + Latitude);
    //   Longitude = response.data.Longitude;
    //   console.log("Longitude = " + Longitude);
    });
  return;
}

export default SensorData;
