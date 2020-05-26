import React, { Component } from "react";
import Product from "./Product";

class ProductList extends Component {
  render() {
    return (
      <div className="row row-cols-1 row-cols-md-4">
        {this.props.products.map((product) => (
          <Product product={product} class="row" />
        ))}
      </div>
    );
  }
}

export default ProductList;
