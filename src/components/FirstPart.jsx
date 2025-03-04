import React, { useState, useEffect } from 'react'
import { Grid2 as Grid, Box } from '@mui/material'
import { keyframes } from '@mui/system'
// import ButtonAppBar from './NavBar';

import bg1 from '../assets/banner1.jpg'
import bg2 from '../assets/banner2.jpg'
import bg3 from '../assets/banner3.jpg'
import bg4 from '../assets/banner4.jpg'
import bg5 from '../assets/banner5.jpg'

const images = [bg1, bg2, bg3, bg4, bg5]

// Animation de fondu (fade-in/out) pour une transition fluide
const slideLeft = keyframes`
  0% {
    transform: translateX(100%)
  }
  100% {
    transform: translateX(-100%)
  }
`

const FirstPart = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    // Change l'image toutes les 3 secondes
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
        }, 3000); // 3s

        return () => clearInterval(timer); // Nettoyage à la suppression du composant
    }, [])

    return (
        <>

            <Grid container sx={{ height: '100vh', overflow: 'hidden', position: 'relative' }}>
                {images.map((img, index) => (
                    <Box
                        key={index}
                        component="img"
                        src={img}
                        alt="Background"
                        sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            opacity: index === currentImageIndex ? 1 : 0, // Afficher uniquement l'image active
                            animation: index === currentImageIndex ? `${slideLeft} 1s ease-in-out` : 'none',
                        }}
                    />
                ))}
            </Grid>
        </>
    );
};

export default FirstPart
