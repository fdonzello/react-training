import React from 'react';
import { Route, Navigate } from 'react-router-dom';


const useAuth = () => {
    const token = localStorage.getItem("token")

    return [token && token.length > 0, token];
}

type PrivateRouteProps = {
    children: React.ReactElement
}

export default function PrivateRoute({ children }: PrivateRouteProps) {
    const [isAuthenticated] = useAuth();
    // const { component: Component, ...rest } = props;

    if (isAuthenticated) {
        return children;
    }

    return <Navigate to='/login' />
}