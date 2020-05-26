import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Cart from './Cart'
import EditCart from './EditCart'

export default class Header extends Component{

    state = {
        carts: [],
        isHidden: true,
    }
    componentDidMount(){
        fetch(`http://localhost:3000/users/${this.props.location.state.current_user_id}`)
        .then(res => res.json())
        .then(user => (
            this.setState({
                carts: user.carts
            })
        ))
    }

    makeNewCart = (user) => {
        fetch("http://localhost:3000/carts",{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                user_id: user
            })
        })
        .then(res => res.json())
        .then(user => (
            this.setState({
                carts: user.carts
            })
        ))
    }    

    toggleHidden = () => {
        this.setState({
          isHidden: !this.state.isHidden
        })
      }

    render(){
        let user = this.props.location.state.current_user_id
        let current_cart = this.state.carts.length == 1 ?  this.state.carts[0] : this.state.carts.slice(-1)[0]

        let prevCarts = this.state.carts.slice(0, -1)
        if(current_cart === undefined){
            return <h3></h3>
        }

        return(
            <div>
                <Link to={{pathname: '/checkout',state: {cart: current_cart, user: user}}}><button>Take me to checkout</button></Link>
                <button onClick={() => this.toggleHidden()}>Show Previous Carts</button>
                {!this.state.isHidden && <PrevCarts carts={prevCarts}/>}
                <div>
                    <h1>Current Cart</h1>
                    <EditCart cart={current_cart} orders={current_cart.orders}/>
                </div>
            </div>
        )
    }
}

const PrevCarts = (props) => (
    <div>
        <h1>Previous Carts</h1>
        {props.carts.length == 0 ? <h3>You have no previous carts</h3> : props.carts.map(cart => (
            <h3><Cart key={cart.id} cart={cart} orders={cart.orders}/></h3>
        ))}
    </div>
)
