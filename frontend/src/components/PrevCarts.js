import React, { Component } from 'react'
import Cart from './Cart'
import NavBar from './NavBar'

export default function PrevCarts(props){
    // console.log(props)
    let prevCarts = props.location.state.cart.slice(0, -1)
    // console.log(props.location.state.user)
    console.log(props.location.state)

    return(
    <div>
        <NavBar current_user_id={props.location.state.user} carts={props.location.state.cart}/>
        <h1>Previous Carts</h1>
        {prevCarts.length == 0 ? <h3>You have no previous carts</h3> : prevCarts.map((cart,index )=> (
            <h3><Cart key={cart.id} index={index + 1} cart={cart} orders={cart.orders}/></h3>
        ))}
    </div>
    )
}