import React, { Component } from "react";
import ProductList from "./ProductList";
import NavBar from "./NavBar";



class Random extends Component {
  state = {
    products: [],
    searchTerm: "",
    searchCategory: "",
    current_user_id: this.props.location.state,
    user: {},
    carts: this.props.carts,
  };

  searchItem = (e) => {
    this.setState({
      searchTerm: e.target.value,
    });

  };


  searchCategory = (searchTerm) => {
    this.setState({
      searchCategory: searchTerm,
    });
    this.getItems(searchTerm);
  };

  getUser = () => {
    fetch(`http://localhost:3000/users/${this.state.current_user_id}`)
      .then((res) => res.json())
      .then((user) =>
        this.setState({
          carts: user.carts,
        })
      );
  };

  componentDidMount() {
    
    fetch(
      "https://target-com-store-product-reviews-locations-data.p.rapidapi.com/product/search?sponsored=1&limit=50&offset=0&store_id=3991&keyword=popular",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host":
            "target-com-store-product-reviews-locations-data.p.rapidapi.com",
          "x-rapidapi-key":
            "31c5440035mshf5daeac1b76e139p1eb9b1jsn956d499e0482",
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        this.setState({
          products: result.products,
        });

      });

      if(this.props.location.state != undefined){
        this.getUser()
      } 

  }

  getItems = (searchItem) => {
    fetch(
      `https://target-com-store-product-reviews-locations-data.p.rapidapi.com/product/search?sponsored=1&limit=50&offset=0&store_id=3991&keyword=${searchItem}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host":
            "target-com-store-product-reviews-locations-data.p.rapidapi.com",
          "x-rapidapi-key":
            "31c5440035mshf5daeac1b76e139p1eb9b1jsn956d499e0482",
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        this.setState({
          products: result.products,
        });
      });
  };

  render() {
    let filteredProducts = [];
    if (this.state.products) {
      filteredProducts = this.state.products.filter((product) =>
        product.title
          .toLowerCase()
          .startsWith(this.state.searchTerm.toLowerCase())
      );
    } else {
      filteredProducts = [{ name: "No product" }];
    }

    return (
      <div>
        <NavBar
          searchItem={this.searchItem}
          searchCategory={this.searchCategory}
          current_user_id={this.props.location.state}
          carts={this.state.carts}
        />
        <ProductList
          products={filteredProducts}
          current_user_id={this.props.location.state}
          carts={this.state.carts}
        />
        
       
      </div>
    );
  }
}

export default Random;
