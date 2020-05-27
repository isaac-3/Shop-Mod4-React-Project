import React from "react";
import { Search } from "./Search";
import {Login} from './Login'
import {Link} from 'react-router-dom'
import Checkout from './Checkout'
import Alert from 'react-bootstrap/Alert'
import ModalModalExample from './Alert'
export default class NavBar extends React.Component {
toggleHidden = () => {
  this.setState({
    isHidden: !this.state.isHidden
  })
}
render(){
  let categories=['iPads', 'Tablets', 'Speakers', 'Microphones', 'Cables', 'Mouses', 'Printers', 'Refrigerators', 'Antennas', 'USBs', 'SD Cards', 'PCs', 'Laptops', 'Phones', 'TVs', 'Chargers', 'Extension Cords', 'Stoves', 'Grills', 'Earphones', 'Headphones', 'Cameras', 'Remotes','Phone Cases', 'Laptop Cases', 'Kindles', 'Video Games', 'Smartwatches' ]
  let sorted= categories.sort((a,b) => (a.toLowerCase() > b.toLowerCase()) ? 1 : -1)
  console.log(this.props)
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
          {this.props.current_user_id == undefined ? 
          <Link to='/'>
            <li className="nav-item active">
              <a className="nav-link">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
          </Link> : 
          <Link to={{pathname: '/home',state: {user: this.props.current_user_id}}}>
            <li className="nav-item active">
              <a className="nav-link">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
          </Link>
            }
          <li className="nav-item">
            <Link to={{pathname: '/cart',state: {user: this.props.current_user_id, cart: this.props.carts, removeOrder: this.props.removeOrder}}}>
            <a className="nav-link" onClick={()=>(
              this.props.current_user_id ? < ModalModalExample/> :
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
         <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              // href=""
              id="navbarDropdown"
              // role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              color="red"
            >
              Category
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              {sorted.map(s=>(
                 <a class="dropdown-item" onClick={()=> this.props.searchCategory(s)}>
                   {s}
                 </a>
              ) )}    
            </div>
          </li>
          <Link to={{pathname: '/checkout',state: {user: this.props.current_user_id, cart: this.props.carts}}}>
          <li className="nav-item" >
            <a className="btn btn-success" onClick={()=>(
              this.props.current_user_id ?  alert("hi") :
              alert("Since you are not logged in, you can't checkout. Please log in.")
            )}>
              <i className="fas fa-shopping-cart text-dark">Checkout</i>
            </a>
          </li>
          </Link>
        </ul>
        <Search searchItem={this.props.searchItem}/>
      </div>
    </nav>
  );
  }
}
  }
}
