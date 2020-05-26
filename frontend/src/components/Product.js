import React from "react";
import Card from "./Card";

export default function Product(props) {
  let base = props.product.images[0].base_url;
  let second = props.product.images[0].primary;
  let image = base + second;

  return (
    
    <div>
      <Card
        title={props.product.title}
        description={props.product.description}
        image={image}
        price={props.product.price}
      />
    </div>
  );

}
