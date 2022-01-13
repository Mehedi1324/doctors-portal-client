import { CircularProgress } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Login from '../Login/Login';



const AdminRoute = () => {
    const { user, admin, isLoading } = useAuth();
    if (isLoading) { return <CircularProgress /> }

    return user.email && admin ? <Outlet /> : <Login />;

}

export default AdminRoute;