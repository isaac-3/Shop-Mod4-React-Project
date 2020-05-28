import React, { Component } from "react";
import CardCart from "./CardCart";

export default function CartProduct(props) {
  let image = props.product.image;
  let price = props.product.price == undefined ? "120" : props.product.price;
  return (
    <div>
      <CardCart
        title={props.product.title}
        description={props.product.description}
        image={image}
        price={price}
        removeOrder={props.removeOrder}
        order={props.order}
      />
    </div>
  );
}
