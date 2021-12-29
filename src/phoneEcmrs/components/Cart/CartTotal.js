import React, { useEffect } from 'react'

import { UseMainContext } from '../../context/Context'
import { Link } from 'react-router-dom';
import CheckOut from './CheckOut'

function CartTotal(props) {

    const styl = {
        textTransform: 'uppercase',
        letterSpacing: '5px',
        margin: '10px 0'
    }


    const ctx = UseMainContext();
    const cartCalc = ctx.cartCalc;
    const cart = ctx.cart
    // console.log(cartCalc);

    useEffect(() => {
        ctx.addTotal()
    }, [cart])

    if (cart.length === 0) {
        return null
    }
    else {
        return (
            <div className='container'>
                <div className="row">
                    <div className='col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize'>
                        <div className="text-right">
                            <Link>
                                <button
                                    onClick={() => ctx.clearCart()}
                                    className='btn btn-outline-danger text-uppercase mb-3 px-5'>
                                    clear cart
                                </button>
                            </Link>
                            <h5>
                                <span className="text-title"> subtotal :</span>{" "}
                                <strong>$ {cartCalc.cartSubTotal} </strong>
                            </h5>
                            <h5>
                                <span className="text-title"> tax :</span>{" "}
                                <strong>$ {cartCalc.cartTax} </strong>
                            </h5>
                            <h5>
                                <span className="text-title"> total :</span>{" "}
                                <strong>$ {cartCalc.cartTotal} </strong>
                            </h5>
                            <Link to='/checkout' style={styl} className="btn btn-info">
                                checkout
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default CartTotal
