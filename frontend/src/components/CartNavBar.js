import React from "react";
import { Search } from "./Search";
import {Login} from './Login'
import {Link} from 'react-router-dom'
import Checkout from './Checkout'
import Alert from 'react-bootstrap/Alert'

export default class CartNavBar extends React.Component {

render(){
  let categories=['iPads', 'Tablets', 'Speakers', 'Microphones', 'Cables', 'Mouses', 'Printers', 'Refrigerators', 'Antennas', 'USBs', 'SD Cards', 'PCs', 'Laptops', 'Phones', 'TVs', 'Chargers', 'Extension Cords', 'Stoves', 'Grills', 'Earphones', 'Headphones', 'Cameras', 'Remotes','Phone Cases', 'Laptop Cases', 'Kindles', 'Video Games', 'Smartwatches' ]
  let sorted= categories.sort((a,b) => (a.toLowerCase() > b.toLowerCase()) ? 1 : -1)

  let user = this.props.current_user_id


  return (
    <nav className="navbar navbar-expand-lg  bg-dark">
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">

        <li className="nav-item active">
          <Link to='/locations'>
            <a className="nav-link">
              Locations
            </a>
          </Link>
          </li>
          
          <Link to={{pathname: '/home',state: {user: this.props.current_user_id, carts: this.props.carts}}}>
            <li className="nav-item active">
              <a className="nav-link">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
          </Link>
          <li className="nav-item">
            <Link to={{pathname: '/cart',state: {user: user, cart: this.props.carts, removeOrder: this.props.removeOrder}}}>
            <a className="nav-link" onClick={()=>(
              this.props.current_user_id ?  <Alert> Hi </Alert> :
              alert("Please log in to see past orders")
            )}>
              Past Orders
            </a>
           </Link>
          </li>
          {this.props.current_user_id === undefined ? 
          <Link to='/login'> <li className="nav-item">
            <a className="nav-link">
             Login/Sign Up
            </a>
          </li>
          </Link> 
          :
          <Link to='/'>
          <li className="nav-item">
            <a className="nav-link">
             Log Out
            </a>
          </li>
          </Link> 
            } 
        </ul>
      </div>
    </nav>
  );
  }
}