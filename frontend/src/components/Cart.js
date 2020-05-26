import React, { Component } from "react";
import Order from "./Order";

export default class Cart extends Component {
  render() {
    return (
      <div className="container row row-cols-1 row-cols-md-4">
        {this.props.cart.id}
        {this.props.orders.map((order) => (
          <div className="row-cols-1 mr-5">
            <Order key={order.id} order={order} product={order.product} />
          </div>
        ))}
      </div>
    );
  }
}
