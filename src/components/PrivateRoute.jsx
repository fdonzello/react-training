import React from 'react';
import { Route, Redirect } from 'react-router-dom';


const useAuth = () => {
    const token = localStorage.getItem("token")

    return [token && token.length > 0, token];
}

export default function PrivateRoute(props) {
    const [isAuthenticated] = useAuth();
    const { component: Component, ...rest } = props;

    if (isAuthenticated) {
        return (
            <Route
                {...rest}
                render={(props) => (
                    <Component {...props} />
                )}
            />
        )
    }

    return <Redirect to='/login' />
}