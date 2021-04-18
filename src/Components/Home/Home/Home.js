import React from 'react';
import Footer from '../../Footer/Footer';
import Navbar from '../../Navbar/Navbar';
import Courses from '../Courses/Courses';
import Header from '../Header/Header';
import Quality from '../Quality/Quality';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';
import Teachers from '../Teachers/Teachers';
import Contact from './Contact/Contact';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <Services />
            <Quality />
            <Courses />
            <Teachers />
            <Reviews />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;