import React, { useState } from 'react'
import Input from '../components/UI/Input'
import classes from './SignInSignUp.module.css'
import { UseMainContext } from '../context/Context'
import { useHistory } from 'react-router-dom'


function SignUp() {

    const styl = {
        background : "orange" , 
        color : "#333" , 
        padding : "4px" , 
        borderRadius : '3px', 
        cursor : 'pointer'
    }

    const ctx = UseMainContext() 
    const history = useHistory() 

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
    })


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
        console.log(user.name);
        console.log(user.email);
        console.log(user.password);
        ctx.CreateUserWithEmailPassword(user.name , user.email , user.password)
    }



    return (
        <div className='text-center'>
            <div className="text-capitalize">
                <h2>Sign up here</h2>
                <h4>{ctx.message ? ctx.message : null }</h4>
                <form onSubmit={handleSubmit}>
                    <div className="">
                        <Input
                            type='text'
                            placeholder='enter your name'
                            name='name'
                            value={user.name}
                            onChange={onChangeHandler}
                        />
                    </div>
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
                            type='text'
                            placeholder='enter your password'
                            name='password'
                            value={user.password}
                            onChange={onChangeHandler}
                        />
                    </div>
                    <div className="mt-5">
                        <button
                            className={classes.base__button}
                            type='submit' >
                            register
                        </button>
                    </div>

                </form>
                <h5 className='mt-3'><div style={styl} onClick={() => ctx.setSignIn(true)}>Have a account?  , login here</div></h5>
            </div>
        </div>
    )
}

export default SignUp
