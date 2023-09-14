import React from 'react';
import Instructor from './Instructor/Instructor';
import Review from './Review/Review';
import Slider from '../../pages/Home/Slider/Slider'
import Features from './Features/Features';
import ServiceItems from '../../pages/ServiceItems/ServiceItems';
import Course from '../../../src/pages/Home/Course/Course';
import Gallery from './Gallery/Gallery';

const Home = () => {
    return (
        <section>
            <Slider></Slider>
            <ServiceItems></ServiceItems>
            <Course></Course>
            <Instructor></Instructor>
            <Review></Review>
            <Gallery></Gallery>
            <Features></Features>
        </section>
    );
};

export default Home;