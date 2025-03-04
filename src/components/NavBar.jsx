
import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Box } from '@mui/material';
//import MenuIcon from '@mui/icons-material/Menu';

const NavBar = () => {
    return (
        <Box
            sx={{
                flexGrow: 1,
                height: '100vh',
                position: 'relative',
                overflow: 'hidden'
            }}

        >
            <AppBar
                position="absolute"
                color="transparent"
                elevation={0}
                sx={{
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    zIndex: 10
                }}

            >


                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography
                            variant="h6"
                            sx={{
                                color: 'orange',
                                fontWeight: 'bold',
                                mr: 2
                            }}
                        >
                            FLIX PRIME
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 2 }}>
                            <Button color="inherit">Home</Button>
                            <Button color="inherit">Acerca</Button>
                            <Button color="inherit">Contenido</Button>
                            <Button color="inherit">Elige Tu País</Button>
                        </Box>
                    </Box>
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: 'orange',
                            '&:hover': {
                                backgroundColor: 'darkorange'
                            }
                        }}
                    >
                        Contactar ventas
                    </Button>
                </Toolbar>
            </AppBar>

        </Box>
    );
};

export default NavBar;






