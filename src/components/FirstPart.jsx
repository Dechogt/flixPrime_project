import React from 'react'
import { Grid2 as Grid } from '@mui/material'
import ButtonAppBar from './NavBar'

function FirstPart() {
    return (
        <>
            <Grid
                container
                size= {{sx: 12, sm: 8}}
            >
                <ButtonAppBar />
            </Grid>
        </>
    )
}

export default FirstPart