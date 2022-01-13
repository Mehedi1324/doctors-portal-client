import { Alert, Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import Booking from '../Booking/Booking';



const bookings = [
    {
        id: 1,
        name: "Teeth Orthodontics",
        time: "8:00 AM - 9:00 AM",
        price: 11,
        space: 5
    },
    {
        id: 2,
        name: "Cosmetic Dentistry",
        time: "10:05 AM - 11:30 AM",
        price: 51,
        space: 10
    },
    {
        id: 3,
        name: "Teeth Cleaning",
        time: "5:00 PM - 6:30 PM",
        price: 61,
        space: 10
    },
    {
        id: 4,
        name: "Cavity Protection",
        time: "7:00 AM - 8:30 AM",
        price: 31,
        space: 10
    },
    {
        id: 5,
        name: "Teeth Orthodontics",
        time: "8:00 AM - 9:00 AM",
        price: 101,
        space: 10
    },
    {
        id: 6,
        name: "Teeth Orthodontics",
        time: "8:00 AM - 9:00 AM",
        price: 31,
        space: 10
    },
]

const AvailableAppointments = ({ date }) => {
    const [bookingSuccess, setBookingSuccess] = useState();
    return (
        <Container>
            <Typography variant="h4" gutterBottom component="div" sx={{ mb: 3, color: "info.main", fontWeight: 600 }}>Available Appoinment on {date.toDateString()}</Typography>
            {bookingSuccess && <Alert security='success'>Booking Success</Alert>}
            <Grid container spacing={2}>
                {
                    bookings.map(booking => <Booking key={booking.id} booking={booking} date={date} setBookingSuccess={setBookingSuccess}>

                    </Booking>)
                }
            </Grid>
        </Container>

    );
};

export default AvailableAppointments;