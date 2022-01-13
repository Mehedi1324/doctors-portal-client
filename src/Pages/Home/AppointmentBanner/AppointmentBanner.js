import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png';
import appointment from '../../../images/appointment-bg.png';
import { Button, Typography } from '@mui/material';


const appointmentBg = {
    background: `url(${appointment})`,
    backgroundColor: "rgba(24, 51, 68,0.9)",
    backgroundBlendMode: "darken, luminosity",
    marginTop: 170,

}

const AppointmentBanner = () => {
    return (

        <Box style={appointmentBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>

                <Grid item xs={12} md={6} >
                    <img style={{ width: 400, marginTop: "-110px" }} src={doctor} alt="" />
                </Grid>


                <Grid item xs={12} md={6} sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    textAlign: "left",

                }}>
                    <Box>
                        <Typography variant='h6' style={{ color: "rgba(92, 160, 115)" }} sx={{ mb: 5 }}>
                            Appoinment
                        </Typography>
                        <Typography variant='h4' style={{ color: "white", fontWeight: 500 }} sx={{ mb: 4 }}>
                            Make an Appoinment Today
                        </Typography>
                        <Typography style={{ color: "white", fontSize: 14, fontWeight: 300 }} sx={{ mb: 4 }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos laboriosam cumque iusto.
                        </Typography>
                        <Button style={{ backgroundColor: "rgba(92, 160, 115)" }} variant="contained">Learn More..</Button>

                    </Box>
                </Grid>


            </Grid >
        </Box >

    );
};

export default AppointmentBanner; 