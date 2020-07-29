/** @format */

import React from "react";

export class Category extends React.Component {
  state = {
    searchCategory: "",
  };

  inputs = (e) => {
    this.setState({
      searchCategory: e.target.value,
    });
  };
  onSubmit = () => {
    this.props.searchCategory(this.state.searchCategory);
  };

  render() {
    return (
      <div>
        <label> Category </label>
        <button value="submit" onClick={() => this.onSubmit()} />
      </div>
    );
  }
}
