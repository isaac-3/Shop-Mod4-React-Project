import React, { Component } from "react";
import NavBar from "./NavBar";
import { Carousel, Card, ListGroup } from "react-bootstrap";

class ShowProduct extends Component {
  // state = {
  //     user: this.props.location.state.product.user
  // }

  addToCart = (prod) => {
    let newProd = {
      title: prod.title,
      price: prod.price,
      description: prod.description,
      image: prod.image,
    };

    console.log(localStorage);
  };

  render() {
    return (
      <div>
        <NavBar
          current_user_id={this.props.location.state.product.current_user_id}
          carts={this.props.location.state.product.carts}
        />
        <div className="container row row-cols-1 row-cols-md-2">
          {this.props.location.state.product.image2.length < 45 &&
          this.props.location.state.product.image3.length < 45 ? (
            <Carousel>
              <div>
                <img
                  className="d-block w-100"
                  src={this.props.location.state.product.image}
                  alt="First slide"
                />
              </div>
            </Carousel>
          ) : (
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={this.props.location.state.product.image}
                  alt="First slide"
                />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={this.props.location.state.product.image2}
                  alt="Third slide"
                />

                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={this.props.location.state.product.image3}
                  alt="Third slide"
                />

                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          )}

          <div className="col mb-1">
            <Card border="secondary" style={{ width: "50rem" }}>
              <Card.Header>
                <h3>Details</h3>
              </Card.Header>
              <ListGroup variant="flush">
                <Card.Body>
                  <ListGroup.Item>
                    {this.props.location.state.product.title}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    {this.props.location.state.product.description ===
                    undefined ? (
                      <p>No description</p>
                    ) : (
                      this.props.location.state.product.description
                    )}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    {this.props.location.state.product.price.current_retail ===
                    undefined ? (
                      <p>Price:$120</p>
                    ) : (
                      <p>
                        Price:$
                        {this.props.location.state.product.price.current_retail}
                      </p>
                    )}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <a
                      class="btn btn-warning"
                      onClick={() =>
                        this.addToCart(this.props.location.state.product)
                      }
                    >
                      <i class="fas fa-cart-plus">Add to cart</i>
                    </a>
                  </ListGroup.Item>
                </Card.Body>
              </ListGroup>
              <h3>Reviews</h3>
              {this.props.location.state.product.reviews.length == 0
                ? "No reviews"
                : this.props.location.state.product.reviews.map(
                    (review, index) => (
                      <p>
                        {" "}
                        {index + 1}. {review.review_text}
                      </p>
                    )
                  )}
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

export default ShowProduct;
