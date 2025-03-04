import React, { useState, useEffect } from 'react'
import { Grid2 as Grid, Box } from '@mui/material'
import NavBar from './components/NavBar'
import FirstPart from './components/FirstPart'
import SecondPart from './components/SecondPart'
import ThirdPart from './components/ThirdPart'
import { keyframes } from '@mui/material'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
//import ButtonAppBar from './NavBar'

function App() {

  const images = [
    { id: '1', component: FirstPart },
    { id: '2', component: SecondPart },
    { id: '3', component: ThirdPart },
  ]

  const slideLeft = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  // Après chaque mise à jour de l'image, on attend 3 secondes pour démarrer l'animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 2000)
    return () => clearTimeout(timer);
  }, [currentImageIndex]);

  // Quand l'animation se termine, on met à jour l'image et on réinitialise l'animation
  const handleAnimationEnd = () => {
    setAnimate(false);
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const components = [bg2, bg3]
  return (
    <>

      <Grid container sx={{ height: '100vh', overflow: 'hidden', position: 'relative' }}>
        <NavBar />
        
        <Box
          component="img"
          src={images[currentImageIndex]}
          alt="Background"
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%', // double largeur pour un slide fluide
            height: '100%',
            objectFit: 'cover',
            // L'animation démarre uniquement si animate est true
            animation: animate ? `${slideLeft} 1s linear forwards` : 'none'
          }}
          onAnimationEnd={handleAnimationEnd}
        />
      </Grid>


    </>
  )
}

export default App