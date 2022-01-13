import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import login from "../../../images/login.png";
import useAuth from "../../../hooks/useAuth"
const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();
    const location = useLocation();
    const history = useNavigate();
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }


    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }


    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history);
    }

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography sx={{ mt: 8 }} variant="body1" component="div" gutterBottom>
                        Login
                    </Typography>

                    {!isLoading && <form onSubmit={handleLoginSubmit}>
                        <TextField name="email" onBlur={handleOnChange} sx={{ width: "75%", m: 1 }} id="standard-basic" label="Your Email" variant="standard" />
                        <TextField name="password" onBlur={handleOnChange} sx={{ width: "75%", m: 1 }} id="standard-basic" type="password" label="Password" variant="standard" />
                        <Button variant='contained' type="submit" sx={{ width: "75%", m: 1 }}>Login</Button>
                        <NavLink style={{ textDecoration: "none" }} to="/register">
                            <Button variant="text">New User? Please Register !</Button>
                        </NavLink>
                        {isLoading && <CircularProgress />}
                        {user?.email && <Alert severity="success">Successfully Loged In</Alert>}
                        {authError && <Alert severity="error">{authError}</Alert>}
                    </form>}

                    <p>-----------------------------------------------</p>
                    <Button onClick={handleGoogleSignIn} variant="contained">Google Sign In</Button>

                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: "100%" }} src={login} alt="" />
                </Grid>

            </Grid>
        </Container>
    );
};

export default Login;