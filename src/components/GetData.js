import './App.css';
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import truedata from './Data/truedata.json';
import Geocode from "react-geocode";
import { useState } from "react";


// AIzaSyDlIxwtExTw5e3YiBlzt5fjAx--vWih_C0     (key)

function Map() {
  Geocode.setApiKey("AIzaSyDlIxwtExTw5e3YiBlzt5fjAx--vWih_C0");

  const [location, setlocatoin] = useState(null);
  
  return <GoogleMap 
          zoom={10} 
          center = {{ lat: 34.052238, lng: -118.243340}} 
          mapContainerClassName="map-container">
            
          {/* <Marker position = {{ lat:34.067340, lng:-118.394670}}/> */}
          {/* {
            console.log(truedata.features)
          } */}

          {/* {
            truedata.features.forEach((e) => {
              Geocode.fromAddress(e.Address).then(
                (response) => {
                  const { lat, lng } = response.results[0].geometry.location;
                  <Marker key={e.Phone} position= {{ lat: lat, lng: lng}}/>;
                  console.log(lat, lng);
                },
                (error) => {
                  console.error(error);
                }
              );
              
              })
          } */}

          {
            truedata.features.map((e) => (
              <Marker key={e.Phone} position={{ lat: e.lat, lng: e.lng}} />
            ))
          }
          
          </GoogleMap>
}

function App() {


  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDj6Y3Fzs44fCoLzdO2SKhDrdS1M75DCkA",
  },);

  if (!isLoaded) return <div> Loading ...</div>

  return (
    <Map />
  );
}

export default App;
