import React from "react";
import Card from "./Card";

export default function Product(props) {
  let base = props.product.images[0].base_url;
  let second = props.product.images[0].primary;
  let third =
    props.product.images[0].alternate_urls === undefined
      ? ""
      : props.product.images[0].alternate_urls[1];

  let fourth =
    props.product.images[0].alternate_urls === undefined
      ? ""
      : props.product.images[0].alternate_urls[2];

  let image = base + second;
  let image2 = base + third;
  let image3 = base + fourth;

  let reviews =
    props.product.top_reviews === undefined ? [] : props.product.top_reviews;
  return (
    <div>
      <Card
        title={props.product.title}
        description={props.product.description}
        image={image}
        image2={image2}
        image3={image3}
        price={props.product.price}
        carts={props.carts}
        current_user_id={props.current_user_id}
        reviews={reviews}
      />
    </div>
  );
}
