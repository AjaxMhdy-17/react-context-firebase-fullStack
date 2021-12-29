import React from 'react'

import classes from './Input.module.css' 

function TextArea(props) {
    return (
        <div>
            <textarea 
                type={props.type} 
                name={props.name}
                className={`${classes.form__style} ${classes.text__area}`}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
            >

            </textarea>
        </div>
    )
}

export default TextArea
