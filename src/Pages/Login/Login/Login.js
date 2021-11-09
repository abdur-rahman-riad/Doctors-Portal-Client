import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import login from '../../../images/login.png';

const Login = () => {
    const [loginData, setLoginData] = useState({});

    const handleOnChange = event => {
        const filed = event.target.name;
        const value = event.target.value;

        const newLoginData = { ...loginData };
        newLoginData[filed] = value;
        setLoginData(newLoginData);
        // console.log(filed, value);
    }

    const handleLoginSubmit = event => {
        alert(event.target.value);
        event.preventDefault();
    }

    return (
        <div>
            <Container>
                <Grid container sx={{ alignItems: "center" }} spacing={2}>
                    <Grid item xs={12} md={6} sx={{ py: 5, textAlign: "center" }}>
                        <Typography variant="h5" sx={{ fontWeight: 500, my: 3 }} gutterBottom>
                            Please Login
                        </Typography>

                        <form onSubmit={handleLoginSubmit}>
                            <TextField
                                sx={{ width: "75%" }}
                                name="email"
                                onChange={handleOnChange}
                                type="email"
                                label="Email"
                                variant="standard"
                                required
                            />

                            <TextField
                                sx={{ width: "75%" }}
                                name="password"
                                onChange={handleOnChange}
                                type="password"
                                label="Password"
                                variant="standard"
                                required
                            />
                            <Link to="/register"><Button variant="text">New User? Register Here</Button></Link>
                            <Button variant="contained" type="submit" sx={{ mt: 3, width: "75%" }}>Login</Button>
                        </form>
                    </Grid>
                    <Grid item xs={12} md={6} >
                        <img src={login} style={{ width: "100%" }} alt="" />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Login;