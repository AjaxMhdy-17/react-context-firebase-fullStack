import React, {useEffect } from 'react'

import { useHistory } from 'react-router-dom'
import { useLocation } from 'react-router'
import classes from './SignInSignUp.module.css'
import { UseMainContext } from '../context/Context'
import SignUp from './SignUp'
import SignIn from './SignIn'


function SignInSignUp(props) {

    const ctx = UseMainContext()
    const history = useHistory()
    // console.log(ctx.user);
    const location = useLocation() 

    let {from} = location.state || {from: {pathname : '/'}}

    useEffect(() => {
        if (ctx.user !== '') {
            history.replace(from)
        }
    }, [ctx.user])
    return (

        <div className={classes.page__back__color}>
            <div className="container-fluid">
                <div className='row mt-5'>
                    <div className="col-md-6 col-12 mx-auto">
                        {
                            ctx.signIn ? (<SignIn />) : (<SignUp />)
                        }
                </div>

            </div>
        </div>
        </div >
    )
}


export default SignInSignUp
