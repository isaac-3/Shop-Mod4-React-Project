/** @format */

import React, { Component } from "react";
import PrevCardCart from "./PrevCardCart";
import CardCart from "./CardCart";

export default function PrevCartProducts(props) {
  let image = props.product.image;
  let price = props.product.price == undefined ? "120" : props.product.price;
  console.log(props);
  return (
    <div>
      <PrevCardCart
        title={props.product.title}
        description={props.product.description}
        image={image}
        price={price}
        order={props.order}
      />
    </div>
  );
}
