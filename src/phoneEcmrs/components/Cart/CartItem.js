import React from 'react'

import { UseMainContext } from '../../context/Context';

import { FaTrash } from 'react-icons/fa';

function CartItem(props) {

    // console.log(props.item);
    const cartItem = props.item ;
    // console.log(cartItem.title);

    const ctx = UseMainContext();
    console.log(ctx);

    const imgStyle = {
        width : '5rem' ,
        height : '5rem'
    }

    return (
        <div className='row text-center mt-5'>
             <div className="col-10 mx-auto col-md-2">
                 <img src={cartItem.img} 
                    style={imgStyle}
                    className='img-fluid'
                    alt="cart-item-img" 
                 />
             </div>
            <div className="col-10 mx-auto col-md-2 ">
                <span className="d-lg-none">product :</span> {cartItem.title}
            </div>
            <div className="col-10 mx-auto col-md-2 ">
                <strong>
                    <span className="d-lg-none">price :</span> ${cartItem.price}
                </strong>
            </div>
            <div className="col-10 mx-auto col-md-2">
                <div className="d-flex justify-content-center">
                    <span
                        className='btn btn-black mx-1'
                        onClick={() => ctx.increaseItem(cartItem.id)}
                    >
                        +
                    </span>
                    <span>
                        {cartItem.count}
                    </span>
                    <span
                        className='btn btn-black mx-1'
                        onClick={() => ctx.decreaseItem(cartItem.id)}
                    >
                        -
                    </span>
                </div>
            </div>
            <div className="col-10 mx-auto col-md-2">
                <div className="cart_remove_icon text-center">
                    <FaTrash
                        onClick={() => ctx.removeItemFromCart(cartItem.id)}
                    />
                </div>
            </div>
            <div className="col-10 mx-auto col-md-2">
                <strong>item total : ${cartItem.total} </strong>
            </div>
        </div>
    )
}

export default CartItem
