import React, { Component } from "react";
import ShowProduct from "./ShowProduct";
import { Link } from "react-router-dom";

class CardCart extends Component {
  render() {
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
              Price: $
              {/* {this.props.price != null
                ? this.props.price.current_retail
                : this.props.price} */}
              {this.props.price}
            </li>
          </ul>
          <div class="card-body">
            {/* <Link to={{pathname: '/show',state: {product: this.props}}}>
            <button type="button" class="btn btn-primary mr-2">
              See more...
            </button>
            </Link> */}
            <button
              type="button"
              class="btn btn-danger mr-2 md-"
              onClick={() => this.props.removeOrder(this.props.order)}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default CardCart;
