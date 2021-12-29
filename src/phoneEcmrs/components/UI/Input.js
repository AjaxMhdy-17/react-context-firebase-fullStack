import React from 'react'
import classes from './Input.module.css' 

function Input(props) {
    return (
        <div>
            <input 
                type={props.type} 
                name={props.name}
                className={classes.form__style}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
                required={props.required} 
            />
        </div>
    )
}

export default Input
