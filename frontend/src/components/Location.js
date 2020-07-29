
/** @format */

=======

import React, { useState, useEffect } from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";
import NavBar from "./NavBar";
import { LocationInput } from "./LocationInput";
import LocationTable from "./LocationTable";

function Map() {
  let [target, setTarget] = useState(null);
  let [locals, setLocals] = useState([]);
  let [defCenter, setCenter] = useState({});
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
      .then((err) => setLocals({ locals: err.locations }));
  }, []);
  let searchLoc = (zip) => {
    getLocations(zip);
  };
  let getLocations = (zip) => {
    fetch(
      `https://target-com-store-product-reviews-locations-data.p.rapidapi.com/location/search?radius=100&zip=${zip}`,
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
      .then((err) => setLocals({ locals: err.locations }));
  };
  let getDefCenter = (zip) => {
    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${zip}&key=${process.env.REACT_APP_GOOGLE_KEY}`
    )
      .then((res) => res.json())
      .then((err) =>
        setCenter({ defCenter: err.results[0].geometry.location })
      );
  };
  if (locals.locals == undefined) {
    return <p> Getting locations</p>;
  }

  return (
    <div>
      <GoogleMap
        defaultZoom={10}
        defaultCenter={{ lat: 29.7604, lng: -95.3698 }}
      >
        {locals.locals.map((loc) => (
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
              </a>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
      <div>
        <LocationInput searchLoc={searchLoc} />
      </div>
    </div>
  );
}
const WrappedMap = withScriptjs(withGoogleMap(Map));

function Location(props) {
  let [carts, setCart] = useState([]);

  useEffect(() => {
    // let getUser = () => {
    fetch(`http://localhost:3000/users/${localStorage.id}`)
      .then((res) => res.json())
      .then((user) =>
        setCart({
          carts: user.carts,
        })
      );
    // };
  }, []);

  console.log(carts);

  return (
    <div>
      <NavBar current_user_id={localStorage.id} carts={carts.carts} />
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
        <div></div>
        <LocationTable border="secondary" />
      </div>
    </div>
  );
}
export default Location;
