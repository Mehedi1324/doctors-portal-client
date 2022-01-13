import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import chair from "../../../images/chair.png";
import bg from "../../../images/bg.png";
import { Button, Container, Typography } from '@mui/material';


const bannerBg = {
    background: `url(${bg})`,
    backgroundSize: "cover",

}

const verticalCenter = {
    display: "flex",
    alignItems: "center",
    height: "400px",
}

const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} style={{ ...verticalCenter, textAlign: "left" }}>

                    <Box>
                        <Typography variant='h3' sx={{ width: "95%" }}>Your New Smaile Starts Here</Typography>
                        <Typography sx={{ my: 3, fontSize: 13, fontWeight: 300, color: "gray", width: "90%" }}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia voluptas quisquam, repellat cupiditate a repudiandae voluptates iure harum optio libero. </Typography>
                        <Button variant="contained" style={{ backgroundColor: "rgba(92, 160, 115)" }}>GET APPOINTMENT..</Button>
                    </Box>

                </Grid>
                <Grid item xs={12} md={6} style={verticalCenter}>
                    <img src={chair} style={{ width: "400px" }} alt='' />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Banner;