import React from "react";
import {GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";


const containerStyle = {
  width: "95%",
  height: "550px",
};

var Latitude = parseFloat(localStorage.getItem("Latitude"));
var Longitude = parseFloat(localStorage.getItem("Longitude"));

const center={
  lat: Latitude,
  lng: Longitude
}

// const center={
//   lat: 24.2243,
//   lng: 89.7058
// }

function Map() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyB16nQHoNGmnVfRM8q6Ha2AXowviSHTdgo",
  });
  

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    
    const bounds = new window.google.maps.LatLngBounds({
      lat: Latitude,
      lng: Longitude,
    });

    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={20}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <Marker position={center}/>
      <></>
      {}
    </GoogleMap>
  ) : (
    <></>
  );
}

export default Map;
