import React, { Component } from "react";
import { Link } from "react-router-dom";
import ShowProduct from "./ShowProduct";

class Card extends Component {
  render() {
    // console.log(this.props.price)
    // console.log(this.props.price.current_retail)
    // console.log(this.props)
    return (
      <div className="col mb-4">
        <div class="card" style={{ width: "18rem" }}>
          <Link to={{ pathname: "/show", state: { product: this.props } }}>
            <img src={this.props.image} class="card-img-top" alt="..." />
          </Link>
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
            <Link to={{ pathname: "/show", state: { product: this.props } }}>
              <button type="button" class="btn btn-primary mr-2">
                See more...
              </button>
            </Link>

            <a class="btn btn-warning" href="#">
              <i class="fas fa-cart-plus">Add to cart</i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
