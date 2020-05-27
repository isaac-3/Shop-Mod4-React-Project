import React, { Component } from "react";
import Product from "./Product";

class ProductList extends Component {
  render() {
    console.log(this.props.products);
    return (
      <div className="row row-cols-1 row-cols-md-4">
        {this.props.products.map((product) => (
          <Product
            product={product}
            class="row"
            carts={this.props.carts}
            current_user_id={this.props.current_user_id}
          />
        ))}
      </div>
    );
  }
}

export default ProductList;
