/** @format */

import React, { Component } from "react";
import EditOrder from "./EditOrder";

export default class EditCart extends Component {
  render() {
    return (
      <div className="row row-cols-1 row-cols-md-3">
        {this.props.orders.map((order) => (
          <EditOrder
            class="row"
            key={order.id}
            order={order}
            product={order.product}
            removeOrder={this.props.removeOrder}
          />
        ))}
      </div>
    );
  }
}
