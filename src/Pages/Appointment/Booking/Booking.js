import { Button, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({ booking, date, setBookingSuccess }) => {
    const { name, time, space, price } = booking;
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleBookingClose = () => setOpen(false);


    return (


        <>
            <Grid item xs={12} sm={6} md={4}>

                <Paper elevation={3} sx={{ py: 5 }}>
                    <Typography sx={{ color: "info.main", fontWeight: 600 }} variant="h5" gutterBottom component="div">
                        {name}
                    </Typography>
                    <Typography variant="h6" gutterBottom component="div">
                        {time}
                    </Typography>
                    <Typography variant="caption" gutterBottom component="div">
                        Price ${price}
                    </Typography>
                    <Typography variant="caption" gutterBottom component="div">
                        {space} SPACES AVAILABLE
                    </Typography>
                    <Button onClick={handleOpen} variant="contained">BOOK APPOINMENT</Button>

                </Paper>
            </Grid>
            <BookingModal date={date} booking={booking} handleBookingClose={handleBookingClose} open={open} setBookingSuccess={setBookingSuccess}>

            </BookingModal>
        </>



    );
};

export default Booking;