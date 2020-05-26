import React from 'react';
import CartProduct from './CartProduct';

export default function Order(props){
    return(
        <div>
            <CartProduct product={props.product}/>
        </div>
    )
}


