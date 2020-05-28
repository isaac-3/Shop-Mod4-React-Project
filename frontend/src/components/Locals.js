import React, { Component } from "react";

class Locals extends Component {
  render() {
    let location = `https://maps.google.com/maps/search/?api=1&query=${this.props.locals.geographic_specifications.latitude},${this.props.locals.geographic_specifications.longitude}`;
    return (
      <tr>
        <td>
          <a href={location}>{this.props.locals.address.address_line1}</a>
        </td>
        <td>
          {this.props.locals.address.city}, {this.props.locals.address.region}.
        </td>
        <td>{this.props.locals.location_names[0].name}</td>
      </tr>
    );
  }
}

export default Locals;
