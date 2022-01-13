import React from 'react';
import Navigation from '../Shared/Navigation/Navigation';
import AppointmentBanner from './AppointmentBanner/AppointmentBanner';
import Services from './Services/Services';
import "./Home.css"
import Banner from './Banner/Banner';
import Doctors from './Doctors/Doctors';
const Home = () => {
    return (
        // <h2>THis is home</h2>
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Services></Services>
            <AppointmentBanner></AppointmentBanner>
            <Doctors></Doctors>
        </div>
    );
};

export default Home;