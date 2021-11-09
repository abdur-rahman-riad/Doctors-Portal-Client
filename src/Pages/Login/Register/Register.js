import React, { useState } from 'react';
import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import login from '../../../images/login.png';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const [registerData, setRegisterData] = useState({});
    const { registerUser } = useAuth();

    const handleOnChange = event => {
        const filed = event.target.name;
        const value = event.target.value;

        const newRegisterData = { ...registerData };
        newRegisterData[filed] = value;
        setRegisterData(newRegisterData);
        // console.log(filed, value);
    }

    const handleRegisterSubmit = event => {
        if (registerData.password !== registerData.confirmPassword) {
            alert("Password Didn't Match");
            return;
        }

        registerUser(registerData.email, registerData.password);

        event.preventDefault();
    }


    return (
        <Container>
            <Grid container sx={{ alignItems: "center" }} spacing={2}>
                <Grid item xs={12} md={6} sx={{ py: 5, textAlign: "center" }}>
                    <Typography variant="h5" sx={{ fontWeight: 500, my: 3 }} gutterBottom>
                        Please Register
                    </Typography>

                    <form onSubmit={handleRegisterSubmit}>
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
                        <TextField
                            sx={{ width: "75%" }}
                            name="confirmPassword"
                            onChange={handleOnChange}
                            type="password"
                            label="Confirm Password"
                            variant="standard"
                            required
                        />
                        <Link to="/login"><Button variant="text">Already Registered? Login Here</Button></Link>
                        <Button variant="contained" type="submit" sx={{ mt: 3, width: "75%" }}>Register</Button>
                    </form>
                </Grid>
                <Grid item xs={12} md={6} >
                    <img src={login} style={{ width: "100%" }} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;