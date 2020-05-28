import React, { Component } from "react";
import Locals from "./Locals";

class LocationRows extends Component {
  render() {
    return (
      <table className="ui celled striped padded table" border="secondary">
        <tbody>
          <tr>
            <th>
              <h3 className="ui center aligned header">Address</h3>
            </th>
            <th>
              <h3 className="ui center aligned header">City</h3>
            </th>
            <th>
              <h3 className="ui center aligned header">Area</h3>
            </th>
          </tr>
          {this.props.locals.map((local) => (
            <Locals locals={local} />
          ))}
        </tbody>
      </table>
    );
  }
}

export default LocationRows;

// <div>
// {this.props.locals.map((local) => (
//     <Locals locals={local} />
//   ))}
// </div>
