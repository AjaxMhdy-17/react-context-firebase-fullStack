import React from 'react'

import Product from './Product'

import {UseMainContext} from '../../context/Context'


const ProductList = () => {

    const ctx = UseMainContext();

    // console.log(ctx.mainState.products);
    const productList = ctx.mainState.products ;
    console.log(productList);

    return (
        <div className='container-fluid'>
            <div className="row">
            {
                productList.map(product => (
                    <div key={product.id} className='col-lg-3 col-md-6 text-center my-3'>
                        <Product product={product}/>
                    </div>
                ))
            }
            </div>
        </div>
    )
}

export default ProductList
