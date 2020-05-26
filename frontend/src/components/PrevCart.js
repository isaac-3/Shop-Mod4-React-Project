import React, { Component } from 'react'
import Cart from './Cart'

export default function PrevCarts(props){
    console.log(props)
    let prevCarts = props.location.state.cart.slice(0, -1)
    console.log(prevCarts)
    return(
    <div>
        <h1>Previous Carts</h1>
        {prevCarts.length == 0 ? <h3>You have no previous carts</h3> : prevCarts.map(cart => (
            <h3><Cart key={cart.id} cart={cart} orders={cart.orders}/></h3>
        ))}
    </div>
    )
}