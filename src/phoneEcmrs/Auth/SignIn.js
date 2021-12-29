import React, { useState  } from 'react'

import classes from './SignInSignUp.module.css'
import Input from '../components/UI/Input'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { UseMainContext } from '../context/Context'

function SignIn(props) {


    const styl = {
        background : "orange" , 
        color : "#333" , 
        padding : "4px" , 
        borderRadius : '3px', 
        cursor : 'pointer'
    }

    const [user, setUser] = useState({
        email: '',
        password: '',
    })
   
  
    const ctx = UseMainContext() 

    const onChangeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUser({
            ...user,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        ctx.loginUserWithEmailAndPass(user.email , user.password)
    }


    return (
        <div className='text-center'>
            <div className="text-capitalize">
                <h2>Sign in here</h2>
                <h4>{ctx.message ? ctx.message : null }</h4>
                <form onSubmit={handleSubmit}>
                    <div className="">
                        <Input
                            type='text'
                            placeholder='enter your email'
                            name='email'
                            value={user.email}
                            onChange={onChangeHandler}
                        />
                    </div>
                    <div className="">
                        <Input
                            type='password'
                            placeholder='enter your password'
                            name='password'
                            value={user.password}
                            onChange={onChangeHandler}
                        />
                    </div>
                    <div className="forget__pass my-3">
                        <Link to='reset'>
                            forget password ? reset your password here 
                        </Link>
                    </div>
                    <div className="mt-5">
                        <button
                            className={classes.base__button}
                            type='submit'
                        >
                            login
                        </button>
                    </div>
                </form>

                <div className={`classes.auth__buttons mt-3`}>
                    <h4>Social logins</h4>
                    <span className={classes.google__Buton}>
                        <button
                            className={classes.base__button}
                            type='button'
                            onClick={() => ctx.loginWithGoogle()}
                        >
                            sign in with google
                        </button>
                    </span>
                </div>
                <h5 className='mt-3'><div style={styl} onClick={() => ctx.setSignIn(false)}>Have no account?  , create one</div></h5>
            </div>
        </div>
    )
}




export default SignIn
