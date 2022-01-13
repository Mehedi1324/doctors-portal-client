import { CircularProgress } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
import Login from '../Login';


const PrivateRoute = () => {
    const { user, isLoading } = useAuth();
    if (isLoading) { return <CircularProgress /> }

    return user.email ? <Outlet /> : <Login />;

}

export default PrivateRoute;