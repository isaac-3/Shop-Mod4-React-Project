/** @format */

import React, { Component } from "react";

class PrevCardCart extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="col mb-4">
        <div class="card" style={{ width: "18rem" }}>
          <img src={this.props.image} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{this.props.title}</h5>
            <p class="card-text"></p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Price: ${this.props.price}</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default PrevCardCart;
