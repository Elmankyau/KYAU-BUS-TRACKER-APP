import React from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";


const containerStyle = {
  width: "95%",
  height: "550px",
};

const center = { 
  lat: 23.8103, 
  lng: 90.4125
 }

function Map(props) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyB16nQHoNGmnVfRM8q6Ha2AXowviSHTdgo",
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    // const bounds = new window.google.maps.LatLngBounds(center);
    const bounds = new window.google.maps.LatLngBounds({
      lat: props.lat,
      lng: props.lng,
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
