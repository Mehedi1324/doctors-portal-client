import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe('pk_test_51KEqmsAaZLZw7vmoTe7hB4toKwU3yf48GjnyNmNY60adxSQjzbS9k3Wvpz5zAsYvzNhLhjYgYqB9Nt7HcpfnTZow00tvm2K5Yo');

const Payment = () => {
    const { appointmentId } = useParams();
    const [appointment, setAppointment] = useState({});
    useEffect(() => {
        fetch(`https://secret-temple-89765.herokuapp.com/appointments/${appointmentId}`)
            .then(res => res.json())
            .then(data => setAppointment(data))
    }, [appointmentId])
    return (
        <div>
            <h2>Please pay for {appointment.patientName} : {appointmentId}</h2>
            <h4>Pay: ${appointment.price}</h4>
            {<Elements stripe={stripePromise}>
                <CheckoutForm
                    appointment={appointment}

                />
            </Elements>}
        </div>
    );
};

export default Payment;