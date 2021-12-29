import React, { useEffect } from 'react'
// import { Database } from '../Firebase/Firebase'
import { UseMainContext } from '../context/Context'
import styled from 'styled-components'

const Profile = () => {


    const style = {
        height: '100px',
        width: '100px'
    }

    const border = {
        borderTop : '1px solid indigo'
    }

    const ctx = UseMainContext()

    useEffect(() => {
        ctx.loadDataFromDatabase()
    }, [ctx.user.email])

    // console.log();

    const userInfo = ctx.userOrder

    // let orderDetail ;

    // let cartCalc;
    // let userDetail;

    // let orderDate;
    let userOrderInfo;

    if (userInfo !== null) {
        userOrderInfo = Object.keys(userInfo).map((key) => {
            return Object.keys(userInfo[key]).map((item, index) => {
                console.log(item + '\t' + userInfo[key][item]);

                if (item === 'orderDetail') {
                    // console.log('only detail' + userInfo[key][item]);
                    return Object.keys(userInfo[key][item]).map((d3, index) => {
                        const itemDetails = userInfo[key][item][d3];
                        return (
                            <div key={index}>
                                <div style={border} className="row text-center">
                                    {/* <div className="col-12 my-5">
                                        {itemDetails.company}
                                        {itemDetails.name}
                                        {itemDetails.count}
                                        {itemDetails.price}
                                    </div> */}
                                    <div className='col-12 col-md-3 mt-3'>
                                        <strong>product </strong><br />
                                        <img src={itemDetails.img} style={style} className='img-fluid' alt="product-image" />
                                    </div>
                                    <div className='col-12 col-md-3 mt-3'>
                                        <strong>name </strong>
                                        <p>{itemDetails.company}</p>
                                    </div>
                                    <div className='col-12 col-md-3 mt-3'>
                                        <strong>count</strong>
                                        <p>{itemDetails.count}</p>
                                    </div>
                                    <div className='col-12 col-md-3 mt-3'>
                                        <strong>price </strong>
                                        <p>${itemDetails.price}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                else if (item === 'userDetail') {
                    // console.log(userInfo[key][item]);
                    const otherInfo = userInfo[key][item]
                    return (
                        <div key={item}>
                            <div className="col-12 mx-auto mb-5 text-center">
                                <UserContainer>
                                    <p>Email : {otherInfo.email}</p>
                                    <p>Address : {otherInfo.address}</p>
                                    <p>phone : {otherInfo.phone}</p>
                                    <p>order-date : {otherInfo.orderDate}</p>
                                </UserContainer>
                            </div>

                        </div>
                    )
                }
            })

        })
    }



    return (
        <div className='container-fluid'>
            <div className="row">
                <div className="col-12 col-md-6 col-lg-4 mx-auto text-center mt-5">
                    <h3>{ctx.user.displayName}</h3>

                </div>
            </div>
            <section>
                {userOrderInfo}
            </section>

        </div>
    )
}


const UserContainer = styled.div`
    background : dodgerblue ;
    display : inline-block ;
    color : #fff ;
    padding : 20px ;
    border-radius : 10px 20px 15px 30px 
`


export default Profile


