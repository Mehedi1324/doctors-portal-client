import { Button, Container, Grid, TextField, Typography, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import login from "../../../images/login.png"
import useAuth from "../../../hooks/useAuth"


const Register = () => {
    const [loginData, setLoginData] = useState({});
    const { user, registerUser, isLoading, authError } = useAuth();
    const history = useNavigate();

    // Changing Actions

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);

    }


    // Submit Actions

    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert("Password did not matched !");
            return;

        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }



    // Results

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography sx={{ mt: 8 }} variant="body1" component="div" gutterBottom>
                        Register
                    </Typography>

                    {!isLoading &&
                        <form onSubmit={handleLoginSubmit}>

                            <TextField name="name" onBlur={handleOnBlur} sx={{ width: "75%", m: 1 }} label="Second Name" variant="standard" />
                            <TextField name="email" onBlur={handleOnBlur} sx={{ width: "75%", m: 1 }} type="email" label="Email" variant="standard" />
                            <TextField name="password" onBlur={handleOnBlur} sx={{ width: "75%", m: 1 }} type="password" label="Password" variant="standard" />
                            <TextField name="password2" onBlur={handleOnBlur} sx={{ width: "75%", m: 1 }} type="password" label="Verify Password" variant="standard" />
                            <Button variant='contained' type="submit" sx={{ width: "75%", m: 1 }}>Register</Button>
                            <NavLink style={{ textDecoration: "none" }} to="/login">
                                <Button variant="text">Already registered? Please Login !</Button>
                            </NavLink>
                        </form>}
                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success">User created successfully</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}


                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: "100%" }} src={login} alt="" />
                </Grid>

            </Grid>
        </Container>
    );
};

export default Register;