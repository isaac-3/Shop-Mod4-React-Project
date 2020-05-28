import React, { Component } from "react";
import LocationRows from "./LocationRows";

class LocationTable extends Component {
  state = {
    locals: [],
  };

  componentDidMount() {
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
        // (err) => console.log(err)
        this.setState({ locals: err.locations })
      );
  }

  render() {
    return <LocationRows locals={this.state.locals} />;
  }
}

export default LocationTable;
