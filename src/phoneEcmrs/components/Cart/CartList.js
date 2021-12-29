import React from 'react'

import CartItem from './CartItem'

function CartList(props) {

    const cartList = props.cartList
    console.log(cartList);


    return (
        <div className='container-fluid'>
            {cartList.map(item => (
                <CartItem key={item.id} item={item}/>
            ))}
        </div>
    )
}

export default CartList
