/** @format */

import React from "react";

export const Search = (props) => {
  return (
    <form
      value="search"
      onClick={props.getItems}
      className="form-inline my-2 my-lg-0"
    >
      <input
        className="form-control mr-sm-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        name="search"
        placeholder="Search An Item"
        onChange={(e) => props.searchItem(e)}
      />
    </form>
  );
};
