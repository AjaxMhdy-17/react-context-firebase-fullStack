import React , {useState , useEffect} from 'react'
import { useHistory } from 'react-router'
import { UseMainContext } from '../../context/Context'
import Input from '../UI/Input'
import { Database } from '../../Firebase/Firebase'

const CheckOut = () => {

    
    const ctx = UseMainContext() 

    const history = useHistory() 

    const [shipmentInfo , setShipmentInfo] = useState({
        name: ctx.user.displayName , 
        email : ctx.user.email,
        address: '',
        street: '',
        city: "",
        zipcode : "",
        phone: "",
        orderDate :  new Date().toLocaleString()
    })

   
    const changerHandler = (e) => {
        const name = e.target.name ;
        const value = e.target.value 
        setShipmentInfo({
            ...shipmentInfo , 
            [name] : value 
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault() 
        // console.log(shipmentInfo);
       
        const userDetailAndOrderDetail = {
            userDetail : shipmentInfo, 
            orderDetail : ctx.cart , 
            cartCalc : ctx.cartCalc ,
        }
        ctx.postUserOrderDetails(userDetailAndOrderDetail)
        ctx.clearCart()
        history.push('/profile')
    }


    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 col-md-8 col-lg-6 mx-auto text-center my-5">
                    <h3>please enter your shipment information</h3>
                    <form action="" onSubmit={handleSubmit}>
                        <div className="form_element">
                            <Input
                                name='name'
                                value={shipmentInfo.name}
                                onChange={changerHandler}
                                placeholder=' enter your name'
                                required
                            />
                        </div>
                        <div className="form_element">
                            <Input
                                type='email'
                                name='email'
                                value={shipmentInfo.email}
                                onChange={changerHandler}
                                placeholder=' enter your email'
                                required
                            />
                        </div>
                        <div className="form_element">
                            <Input
                                name='address'
                                value={shipmentInfo.address}
                                onChange={changerHandler}
                                placeholder=' enter your address'
                                required
                            />
                        </div>
                        <div className="form_element">
                            <Input
                                name='street'
                                value={shipmentInfo.street}
                                onChange={changerHandler}
                                placeholder=' enter your street'
                                required
                            />
                        </div>
                        <div className="form_element">
                            <Input
                                name='city'
                                value={shipmentInfo.city}
                                onChange={changerHandler}
                                placeholder=' enter your city'
                                required
                            />
                        </div>
                        <div className="form_element">
                            <Input
                                name='zipcode'
                                value={shipmentInfo.zipcode}
                                onChange={changerHandler}
                                placeholder='zipcode'
                                required
                            />
                        </div>
                        <div className="form_element">
                            <Input
                                name='phone'
                                value={shipmentInfo.phone}
                                onChange={changerHandler}
                                placeholder='phone'
                                required
                            />
                        </div>
                        <button type="submit" className='btn btn-info my-3'>
                            send
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CheckOut
