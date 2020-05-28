import React from "react";
import { Search } from "./Search";
import { Login } from "./Login";
import { Link } from "react-router-dom";
import Checkout from "./Checkout";
// import Alert from "react-bootstrap/Alert";
// import ModalModalExample from "./Alert";
import "./PastBtnCss.css";

export default class NavBar extends React.Component {
  state={
   active: false
  }


  toggleHidden = () => {
    this.setState({
      active: true
    })
  };


  toggleButton = () => {
    this.setState({
      active: false
    })
  };

  render() {
    let categories = [
      "iPads",
      "Tablets",
      "Speakers",
      "Microphones",
      "Cables",
      "Mouses",
      "Printers",
      "Refrigerators",
      "Antennas",
      "USBs",
      "SD Cards",
      "PCs",
      "Laptops",
      "Phones",
      "TVs",
      "Chargers",
      "Extension Cords",
      "Stoves",
      "Grills",
      "Earphones",
      "Headphones",
      "Cameras",
      "Remotes",
      "Phone Cases",
      "Laptop Cases",
      "Kindles",
      "Video Games",
      "Smartwatches",
    ];
    let sorted = categories.sort((a, b) =>
      a.toLowerCase() > b.toLowerCase() ? 1 : -1
    );

    console.log(this.props);
    return (
      <nav className="navbar navbar-expand-lg navbar navbar-dark bg-info">
        <div class="container-fluid">
          <div class="navbar-header">
            <a class="navbar-brand" href="#">
              Shop My Shit
            </a>
          </div>
          <ul className="navbar-nav mr-auto">
            {this.props.current_user_id == undefined ? (
              <Link to="/">
                <li className="nav-item active">
                  <a className="nav-link">
                    Home <span className="sr-only">(current)</span>
                  </a>
                </li>
              </Link>
            ) : (
              <Link
                to={{
                  pathname: "/home",
                  state: { user: this.props.current_user_id },
                }}
              >
                <li className="nav-item active">
                  <a className="nav-link">
                    Home <span className="sr-only">(current)</span>
                  </a>
                </li>
              </Link>
            )}

            <li className="nav-item">
             
              {this.props.current_user_id ? (
                 <Link
                 to={{
                   pathname: "/cart",
                   state: {
                     user: this.props.current_user_id,
                     cart: this.props.carts,
                     removeOrder: this.props.removeOrder,
                   },
                 }}
               >  <a className= "nav-link" >
                 Past Orders</a>
                  </Link>//alert("Please log in to see past orders")
              ) :(
                <div>
                  <a className="nav-link" onClick={()=>this.toggleHidden()}>
                    Past Orders 
                  </a>
                  <div className={this.state.active===true ? "overlay active" : "overlay "}> 
                  
                    <div className="popup">
                      {/* <h2>Here i am</h2> */}
                      <a className="close" onClick={()=> this.toggleButton()} >
                        &times;
                      </a>
                      <div className="content">
                        You are not logged in. Please log in to see your past orders.
                      </div>
                     
                    </div>
                  </div>
                </div>
              ) }
             
            </li>

            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                // href=""
                // className="text-light"
                id="navbarDropdown"
                // role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                color="red"
              >
                Categories
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                {sorted.map((s) => (
                  <a
                    class="dropdown-item"
                    onClick={() => this.props.searchCategory(s)}
                  >
                    {s}
                  </a>
                ))}
              </div>
            </li>

            <li className="nav-item active">
              <Link to="/locations">
                <a className="nav-link">Locations</a>
              </Link>
            </li>

            <Link
              to={{
                pathname: "/checkout",
                state: {
                  user: this.props.current_user_id,
                  cart: this.props.carts,
                },
              }}
            >
              <li className="nav-item">
                <a
                  className="btn btn-light"
                  onClick={() =>
                    this.props.current_user_id
                      ? alert("hi")
                      : alert(
                          "Since you are not logged in, you can't checkout. Please log in."
                        )
                  }
                >
                  <i className="fas fa-shopping-cart text-dark">Checkout</i>
                </a>
              </li>
            </Link>
          </ul>
          <Search searchItem={this.props.searchItem} />
          <ul class="nav navbar-nav navbar-right">
            {/* <li>
      a href="#">
      <span class="glyphicon glyphicon-user"></span> 
      Sign Up</a></li>
      <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li> */}

            {this.props.current_user_id === undefined ? (
              <Link to="/login">
                {" "}
                <li>
                  <a className="text-light">
                    Login/Sign Up
                    <i class="fas fa-user"></i>
                  </a>
                </li>
              </Link>
            ) : (
              <Link to="/">
                <li className="nav-item">
                  <a className="nav-link">Log Out</a>
                </li>
              </Link>
            )}
          </ul>
        </div>
      </nav>
    );
    //   }
    // }
  }
}
