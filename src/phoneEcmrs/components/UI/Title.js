import React from 'react'

function Title({name , title}) {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-10 mx-auto my-2 text-center text-title">
                    {name} <strong className="text-blue">
                        {title}
                    </strong>
                </div>
            </div>
        </div>
    )
}

export default Title
