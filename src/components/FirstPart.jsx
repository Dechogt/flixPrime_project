import React, { useState, useEffect } from 'react'
import { Grid2 as Grid, Box } from '@mui/material'
//import { keyframes } from '@mui/material'


import bg1 from '../assets/banner1.jpg'



const FirstPart = () => {
    

    return (

        <>
           

            {/* Background Image */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: 'url(https://example.com/football-player-image.jpg)', // Remplacez par votre image
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'brightness(0.7)', // Assombrit légèrement l'image
                    zIndex: 1
                }}
            />

            {/* Content Overlay */}
            <Container
                sx={{
                    position: 'relative',
                    zIndex: 5,
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center'
                }}
            >
                <Grid container spacing={2}>
                    <Grid item xs={12} md={8}>
                        <Typography
                            variant="body1"
                            sx={{
                                color: 'white',
                                mb: 1
                            }}
                        >
                            TODO POR SOLO S/19.90 AL MES
                        </Typography>
                        <Typography
                            variant="h2"
                            sx={{
                                color: 'white',
                                fontWeight: 'bold',
                                mb: 3
                            }}
                        >
                            Todo el fútbol mundial
                        </Typography>
                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: 'orange',
                                fontSize: '1.2rem',
                                '&:hover': {
                                    backgroundColor: 'darkorange'
                                }
                            }}
                        >
                            Pruébalo gratis
                        </Button>
                    </Grid>
                </Grid>
            </Container>

            {/* Slider Indicators */}
            <Box
                sx={{
                    position: 'absolute',
                    bottom: 20,
                    left: 0,
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    zIndex: 10
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        gap: 1
                    }}
                >
                    {[...Array(5)].map((_, index) => (
                        <Box
                            key={index}
                            sx={{
                                width: 10,
                                height: 10,
                                borderRadius: '50%',
                                backgroundColor: index === 0 ? 'orange' : 'white'
                            }}
                        />
                    ))}
                </Box>
            </Box>
            
        </>
    )
}

export default FirstPart

