import React, { useState } from 'react'
import { UseMainContext } from '../context/Context'
import Input from '../components/UI/Input'

const Reset = () => {

    const [email, setEmail] = useState('')
    

    const ctx = UseMainContext() 

    const onChangeHandler = (e) => {
        setEmail(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        ctx.passwordReset(email)
    }

    return (
        <div className='container-fluid'>
            <div className="row">
                <div className="col-12 col-md-6 col-lg-4 mx-auto text-center">
                    {ctx.thanks === true ? (
                        <h4 className='my-5'>check your email inbox . thank you.</h4>
                    ) : (
                        <>
                            <form action="" onSubmit={handleSubmit}>
                                <Input
                                    className='form-control'
                                    name='email'
                                    onChange={onChangeHandler}
                                    type="text"
                                    placeholder='enter your email'
                                />
                                <button type="submit" className='btn btn-info my-4'>
                                    send
                                </button>
                            </form>
                        </>
                    )}

                </div>
            </div>
        </div>
    )
}

export default Reset
