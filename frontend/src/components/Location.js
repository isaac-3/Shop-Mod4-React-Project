import React, { useState, useEffect } from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";
import NavBar from "./NavBar";
import LocationTable from "./LocationTable";
import { SearchLocation } from "./SearchLocation";

function Map() {
  const [target, setTarget] = useState(null);
  const [locals, setLocals] = useState([]);

  useEffect(() => {
    fetch(
      "https://target-com-store-product-reviews-locations-data.p.rapidapi.com/location/search?radius=100&zip=77021",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host":
            "target-com-store-product-reviews-locations-data.p.rapidapi.com",
          "x-rapidapi-key":
            "31c5440035mshf5daeac1b76e139p1eb9b1jsn956d499e0482",
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((err) =>
        // console.log(err)
        setLocals({ locals: err.locations })
      );
  }, []);

  if (locals.locals == undefined) {
    return <p> Getting locations</p>;
  }
  console.log(locals.locals[0].geographic_specifications.latitude);

  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 29.760427, lng: -95.369804 }}
    >
      {locals.locals.map((loc) => (
        // console.log(loc)

        <Marker
          key={loc.location_id}
          position={{
            lat: loc.geographic_specifications.latitude,
            lng: loc.geographic_specifications.longitude,
          }}
          onClick={() => {
            setTarget(loc);
          }}
          icon={{
            url: "https://img.icons8.com/office/30/000000/address.png",
            scaledSize: new window.google.maps.Size(20, 20),
          }}
        />
      ))}
      {target && (
        <InfoWindow
          position={{
            lat: target.geographic_specifications.latitude,
            lng: target.geographic_specifications.longitude,
          }}
          onCloseClick={() => {
            setTarget(null);
          }}
        >
          <div>
            <a
              href={`https://maps.google.com/maps/search/?api=1&query=${target.geographic_specifications.latitude},${target.geographic_specifications.longitude}`}
            >
              {target.location_names[0].name} <br />
              {target.address.address_line1} <br />
              {target.address.city} <br />
              {target.address.state} <br />
              {target.address.postal_code} <br />
              {/* {target.desc} */}
            </a>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

function Location() {
  return (
    <div>
      <NavBar />
      <div
        style={{
          width: "100vh",
          height: "100vh",
          margin: "auto",
          marginTop: "35px",
        }}
      >
        <h1>Our Locations</h1>
        <WrappedMap
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDJvg5WPlOh_7Y6IHPCItqZTVQTCpC9aqs`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
        <br />
        <br />
        <br />
        <div>
          <h5>Search:</h5>
          <SearchLocation />
        </div>
        <LocationTable border="secondary" />
      </div>
    </div>
  );
}
export default Location;
