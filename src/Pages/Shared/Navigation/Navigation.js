import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { Container } from '@mui/material';
import useAuth from '../../../hooks/useAuth';

const Navigation = () => {
    const { user, logOut } = useAuth();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Container>
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Doctors Portal
                        </Typography>
                        <Link to="/home">
                            <Button color="inherit" style={{ color: "white" }}>Home</Button>
                        </Link>
                        <Link to="/appointment">
                            <Button color="inherit" style={{ color: "white" }}>Appointment</Button>
                        </Link>

                        {user?.email ?
                            <Button onClick={logOut} color="inherit" style={{ color: "white" }}>Logout</Button>
                            :
                            <Link to="/login">
                                <Button color="inherit" style={{ color: "white" }}>Login</Button>
                            </Link>}
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    );
};

export default Navigation;