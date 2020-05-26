import React, { Component } from "react";
import CardCart from "./CardCart";

export default function CartProduct(props) {
  let image = props.product.image;

  return (
    <div>
      <CardCart
        title={props.product.title}
        description={props.product.description}
        image={image}
        price={props.product.price}
      />
    </div>
  );
}
