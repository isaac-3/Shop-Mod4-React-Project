import React from 'react';
import CartProduct from './CartProduct';

export default function EditOrder(props){
    return(
        <div>
            <CartProduct product={props.product}  removeOrder={props.removeOrder} order={props.order}/>
            {/* <button onClick={() => props.removeOrder(props.product)}>Remove</button> */}
        </div>
    )
}