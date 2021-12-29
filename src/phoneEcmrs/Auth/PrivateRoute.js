import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import { UseMainContext } from '../context/Context'


const PrivateRoute = ({ children, ...rest }) => {

    const ctx = UseMainContext()

    return (
        <Route
            {...rest}
            render={({ location }) =>
                ctx.user !== '' ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/auth",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}

export default PrivateRoute
