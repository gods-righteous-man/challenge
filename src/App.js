import './App.css';
import { GoogleMap, useLoadScript, Marker, InfoWindow } from "@react-google-maps/api";
import truedata from './Data/truedata.json';
import Geocode from "react-geocode";
import { useMemo, useState } from "react";
import mapStlyes from './components/mapStyles';



function Map() {
  Geocode.setApiKey("AIzaSyDlIxwtExTw5e3YiBlzt5fjAx--vWih_C0");
  const center = useMemo(() => ({lat: 34.052238, lng: -118.243340}), [])  //keeping map center as Los Angeles
  const [location, setlocation] = useState(null);

  return <GoogleMap 
          zoom={10} 
          center = {center} 
          mapContainerClassName="map-container"
          options = {{ styles: mapStlyes }}
          >
            
          
          {
            truedata.features.map((e) => (
              <Marker 
              key={e.Phone} 
              position={{ lat: e.lat, lng: e.lng}} 
              onClick = { () => {
                setlocation(e);
              }}
              
              />
            ))
          }

          {
            location && (
              <InfoWindow 
              position={{ lat: location.lat, lng: location.lng }} 
              onCloseClick = { () => { setlocation(null) }}
              >
                <div>
                  <h2>{location.Name}</h2>
                  <h3>Phone No :{location.Phone}</h3>
                  <h3>Address :{location.Address}</h3>
                  <h4>Website :<a href={location.Website} >{location.Website}</a></h4>
                  <h4>Rating out of 5:{location["Google Rating (out of 5)"]}</h4>
                  <h4>Review Count : {location["Number of reviews"]}</h4>
                </div>
              </InfoWindow>
            )
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
