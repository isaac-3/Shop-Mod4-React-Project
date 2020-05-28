import React, { useState } from "react";
import EditCart from "./EditCart";
import NavBar from "./NavBar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
export default class Checkout extends React.Component {
  state = {
    current_cart:
      this.props.location.state.cart == 1
        ? this.props.location.state.cart[0]
        : this.props.location.state.cart.slice(-1)[0],
  };
  purchased = (user_id) => {
    fetch("http://localhost:3000/carts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_id: user_id,
      }),
    })
      .then((res) => res.json())
      .then((user) => {
        alert("Purchased");
        this.props.history.push("/home", user.id);
      });
  };
  removeOrder = (order) => {
    fetch(`http://localhost:3000/carts/${this.state.current_cart.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: this.state.current_cart.id,
        order: order,
      }),
    })
      .then((res) => res.json())
      .then((user) =>
        this.setState({
          current_cart:
            user.carts == 1 ? user.carts[0] : user.carts.slice(-1)[0],
        })
      );
  };
  render() {
    let user_id = this.props.location.state.user;
    let totalPrice = this.state.current_cart.orders
      .map((o) => o.product.price)
      .reduce((a, b) => a + b, 0);
    console.log(
      this.props.location.state.cart == 1
        ? this.props.location.state.cart[0]
        : this.props.location.state.cart.slice(-1)[0]
    );
    return (
      <div>
        <NavBar
          current_user_id={this.props.location.state.user}
          carts={this.props.location.state.cart}
        />
        <h1>Order Summary</h1>

        <div>
          {this.state.current_cart.created_at}
          <br />
          <br />
          <br />
          <EditCart
            cart={this.state.current_cart}
            orders={this.state.current_cart.orders}
            removeOrder={this.removeOrder}
          />
        </div>

        <Container>
          <Row></Row>
          <br />
          <h4>
            Order Total : $
            <span>
              <b>{totalPrice}</b>
            </span>
          </h4>
          <br />
          <br />
          <Row>
            <Col>
              <div>
                <form>
                  <div class=" auth-wrapper auth-inner row-">
                    <h2 class="text-center">
                      Billing Address <i class="fas fa-home fa-sm"> </i>
                    </h2>
                    <div class="form-group col-md-9">
                      <label for="validationDefault01">Full Name</label>
                      <input
                        type="text"
                        class="form-control"
                        id="fname"
                        placeholder="Full Name"
                        name="firstname"
                        required
                      />
                    </div>
                    <div class="form-group col-md-9">
                      <label for="validationDefault02">Email</label>
                      <input
                        type="text"
                        name="email"
                        class="form-control"
                        id="email"
                        placeholder="Email"
                        required
                      />
                    </div>
                    <div class="form-group col-md-9">
                      <label for="validationDefaultUsername">City</label>

                      {/* <div class="input-group-prepend">
                                <span class="input-group-text" id="inputGroupPrepend2"></span>
                            </div> */}
                      <input
                        type="text"
                        id="city"
                        name="city"
                        class="form-control"
                        id="validationDefaultUsername"
                        placeholder="City"
                        aria-describedby="inputGroupPrepend2"
                        required
                      />
                    </div>

                    <div class="form-group col-md-9">
                      <label for="validationDefault03">Address</label>
                      <input
                        type="text"
                        class="form-control"
                        id="adr"
                        placeholder="Address"
                        name="address"
                        required
                      />
                    </div>
                    <div class="form-group col-md-9">
                      <label for="validationDefault04">State</label>
                      <input
                        type="text"
                        class="form-control"
                        id="state"
                        placeholder="State"
                        required
                      />
                    </div>
                    <div class="form-group col-md-9">
                      <label for="validationDefault05">Zip</label>
                      <input
                        type="text"
                        class="form-control"
                        id="Zip"
                        name="Zip"
                        placeholder="Zip"
                        required
                      />
                    </div>
                  </div>
                </form>
              </div>
            </Col>

            <Col>
              <form>
                <div class="auth-wrapper auth-inner row-2">
                  <h2 class="text-center">
                    Payment Information <i class="fab fa-cc-visa mr-2"></i>
                    <i class="fab fa-cc-mastercard mr-2"></i>
                  </h2>
                  <div class="form-group col-md-9">
                    <div class="col-md-70 mb-6">
                      <label for="validationDefault01">Name On Card</label>
                      <input
                        type="text"
                        class="form-control "
                        id="cname"
                        // placeholder="Name On Card"
                        name="cardname"
                        required
                      />
                    </div>
                    <div class="col-md-70 mb-9">
                      <label for="validationDefault02">
                        Credit Card Number
                      </label>
                      <input
                        type="text"
                        id="ccnum"
                        class="form-control"
                        id="validationDefault02"
                        // placeholder="Credit Card Number"
                        name="Credit Card Number"
                        required
                      />
                    </div>
                    <div class="col-md-70 mb-9">
                      <label for="validationDefaultUsername">Exp.Date</label>
                      <div class="input-group">
                        {/* <div class="input-group-prepend">
                                <span class="input-group-text" id="inputGroupPrepend2"></span>
                            </div> */}
                        <input
                          type="text"
                          class="form-control"
                          id="expd"
                          // placeholder="03/09"
                          aria-describedby="inputGroupPrepend2"
                          name="expirationd"
                          required
                        />
                      </div>
                    </div>
                    <div class="col-md-10 mb-9">
                      <label for="validationDefaultUsername">CVV</label>
                      <div class="input-group">
                        {/* <div class="input-group-prepend">
                                <span class="input-group-text" id="inputGroupPrepend2"></span>
                            </div> */}
                        <input
                          type="text"
                          class="form-control"
                          id="cvvid"
                          name="cvv"
                          // placeholder="521"
                          aria-describedby="inputGroupPrepend2"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="text-left">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="invalidCheck2"
                          required
                          label="Agree to terms and conditions"
                          feedback="You must agree before submitting."
                        />
                        <label class="form-check-label" for="invalidCheck2">
                          Agree to terms and conditions
                        </label>
                      </div>
                      <br />
                      <div class="text-left">
                        <button
                          class="btn btn-primary"
                          type="submit"
                          onClick={() => this.purchased(user_id)}
                        >
                          Purchase
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
