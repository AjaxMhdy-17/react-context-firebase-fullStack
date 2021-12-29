import React , {useState , useEffect} from 'react'

import { UseMainContext } from '../../context/Context'
import Title from '../UI/Title'
import CartColumn from './CartColumn'
import CartList from './CartList'
import CartTotal from './CartTotal'
import EmptyCart from './EmptyCart'

const geWindowDimensions = () => {
    const {innerWidth : width} = window 
    return width 
}


function Cart() {

    const [width , setWidth] = useState(geWindowDimensions())

    const ctx = UseMainContext();
  
    console.log(ctx.cart);
    const cartList = ctx.cart ;


    useEffect(() => {
        function handleResize(){
            setWidth(geWindowDimensions())
        }
        window.addEventListener('resize' , handleResize)
        return () => window.removeEventListener('resize',handleResize)
    },[])


    if( ctx.cart.length > 0 ){
        return (
            <div>
                <Title name='your' title='cart'/>
                {width > 767 && <CartColumn/>}
                <CartList cartList={cartList}/>
                <CartTotal/>
            </div>
        )
    }
    else{
        return (
            <EmptyCart/>
        )
    }

   
}

export default Cart
