/** @format */

import React from "react";

export class LocationInput extends React.Component {
  state = {
    zip: "",
  };

  inputs = (e) => {
    this.setState({
      zip: e.target.value,
    });
  };
  onSubmit = () => {
    this.props.searchLoc(this.state.zip);
  };

  render() {
    return (
      <div>
        <label> Enter your zip code: </label>
        <input
          type="number"
          pattern="\d*"
          maxlength="5"
          onChange={(e) => this.inputs(e)}
        />
        <button value="submit" onClick={() => this.onSubmit()}>
          Search
        </button>
      </div>
    );
  }
}
