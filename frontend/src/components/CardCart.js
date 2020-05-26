import React, { Component } from "react";

class CardCart extends Component {
  render() {
    // console.log(this.props.price)
    // console.log(this.props.price.current_retail)
    return (
      <div className="col mb-4">
        <div class="card" style={{ width: "18rem" }}>
          <img src={this.props.image} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{this.props.title}</h5>
            <p class="card-text"></p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              Price:
              {this.props.price != null
                ? this.props.price.current_retail
                : this.props.price}
            </li>
            <li class="list-group-item">OTHER STUFF</li>
            <li class="list-group-item">OTHER STUFF</li>
          </ul>
          <div class="card-body">
            <button type="button" class="btn btn-primary mr-2">
              See more...
            </button>
            <button type="button" class="btn btn-danger mr-2 md-">
              Remove
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default CardCart;
