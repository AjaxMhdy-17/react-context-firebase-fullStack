import React from 'react'
import { Link } from 'react-router-dom'
import { UseMainContext } from '../../context/Context'
import {ButtonContainer} from '../UI/ButtonContainer'

function ProductDetail() {

    const ctx = UseMainContext()
    // console.log(ctx.mainState.detailsProduct);
    const product = ctx.mainState.detailsProduct


    return (
        <div className='container'>
            <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                    <h2>{product.title}</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                    <img src={product.img} className='img-fluid' alt="product-image" />
                </div>
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                    <h2>modal : {product.title}</h2>
                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                        made by : <span className="text-uppercase">{product.company}</span>
                    </h4>
                    <h4 className="text-blue">
                        <strong>
                            price : <span>$</span>{product.price}                            
                        </strong>
                    </h4>
                    <p className="text-capitalize font-weight-bold mt-3 mb-0">
                        some info about product :
                    </p>
                    <p className="text-muted lead">{product.info}</p>
                    <div>
                        <Link to='/'>
                            <ButtonContainer >
                                Back To Product
                            </ButtonContainer>
                        </Link>
                        <ButtonContainer 
                            cart
                            disabled={product.inCart? true : false}
                            onClick={() => {
                                ctx.addToCart(product.id)
                                ctx.openModal(product.id) 
                            }}
                        >
                            {product.inCart ? "in cart":"add to cart"}
                        </ButtonContainer>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail
