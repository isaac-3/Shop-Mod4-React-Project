import React, {useState} from 'react';
import {GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow} from 'react-google-maps'

REACT_APP_GOOGLE_KEY="AIzaSyDJvg5WPlOh_7Y6IHPCItqZTVQTCpC9aqs"

function Map(){
  
    const [target, setTarget] = useState(null)

    const locals = [
      {
        id: 1,
        lat: 29.760427,
        lng:-95.369804,
        desc: 'rafa'
      },
      {
        id: 2,
        lat: 29.691063,
        lng: -95.209099,
        desc: 'melike'
      },
      {
        id: 3,
        lat: 29.704479,
        lng: -95.455437,
        desc: 'isaac'
      }
    ]
  
    return(
      <GoogleMap 
        defaultZoom={10}
        defaultCenter={{lat: 29.760427, lng: -95.369804}}
      >
      {locals.map(loc => (
        <Marker key={loc.id} position={{lat: loc.lat, lng: loc.lng}} onClick={() => {setTarget(loc)}}
        icon={{url: 'https://1000logos.net/wp-content/uploads/2017/06/target-logo-transparent.png', scaledSize: new window.google.maps.Size(25,25)}}/>
      ))}
      {target && (
        <InfoWindow position={{lat: target.lat, lng: target.lng}} onCloseClick={() => {setTarget(null)}}>
          <div>
            {target.desc}
          </div>
        </InfoWindow>
      )}
      </GoogleMap>
    )
  }

const WrappedMap = withScriptjs(withGoogleMap(Map))

function Location() {
  return (
    <div style={{width: '100vh', height: '100vh', margin: 'auto', marginTop: '175px'}}>
      <h1>Our Locations</h1>
      <WrappedMap 
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  )
}
export default Location;
