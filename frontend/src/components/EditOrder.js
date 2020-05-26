import React from 'react';
import CartProduct from './CartProduct';

export default function EditOrder(props){
    return(
        <div>
            <CartProduct product={props.product}/>
            <button onClick={() => props.removeOrder(props.product)}>Remove</button>
        </div>
    )
}


// import React, { Component } from 'react';
// import EditOrder from './EditOrder'

// export default class EditCart extends Component{

//     state = {
//         orders: this.props.orders
//     }

//     // removeOrder = (order) => {
//     //     fetch(`http://localhost:3000/carts/${this.props.cart.id}`,{
//     //         method: 'PATCH',
//     //         headers: {'Content-Type': 'application/json'},
//     //         body: JSON.stringify({
//     //             id: this.props.cart.id,
//     //             order: order
//     //         })
//     //     })
//     //     .then(res => res.json())
//     //     .then(cart => (
//     //         this.setState({
//     //             orders: cart.orders
//     //         })
//     //     ))
//     // }

//     render(){
//         return(
//             <div>
//                 {this.props.cart.id}
//                 {this.props.orders.map(order => (
//                     <EditOrder key={order.id} order={order} product={order.product} removeOrder={this.props.removeOrder}
//                     />
//                 ))}
//             </div>
//         )
//     }
// }