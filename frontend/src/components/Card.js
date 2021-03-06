/** @format */

import React, { Component } from "react";
import { Link } from "react-router-dom";

class Card extends Component {
  addToCart = (prod) => {
    let newProd = {
      title: prod.title,
      price: prod.price,
      description: prod.description,
      image: prod.image,
    };
    let current_cart =
      prod.carts.length == 1 ? prod.carts[0] : prod.carts.slice(-1)[0];
    fetch(`http://localhost:3000/carts/${current_cart.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_id: current_cart.user_id,
        newProd: newProd,
      }),
    });
  };

  render() {

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
              Price: $
              {this.props.price.current_retail == undefined
                ? this.props.price.current_retail_max
                : this.props.price.current_retail}
            </li>
          </ul>
          <div class="card-body">
            <Link to={{ pathname: "/show", state: { product: this.props } }}>
              <button type="button" class="btn btn-primary mr-2">
                See more...
              </button>
            </Link>

            <a
              class="btn btn-warning"
              onClick={() => this.addToCart(this.props)}
            >
              <i class="fas fa-cart-plus">Add to cart</i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
