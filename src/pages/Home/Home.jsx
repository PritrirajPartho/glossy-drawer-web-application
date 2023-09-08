import React from 'react';
import Instructor from './Instructor/Instructor';
import Review from './Review/Review';
import Slider from '../../pages/Home/Slider/Slider'
import Features from './Features/Features';
import FinalGallery from '../FinalGallery/FinalGallery';
import ServiceItems from '../../pages/ServiceItems/ServiceItems';

const Home = () => {
    return (
        <section>
            <Slider></Slider>
            <ServiceItems></ServiceItems>
            <Instructor></Instructor>
            <Review></Review>
            <FinalGallery></FinalGallery>
            <Features></Features>
        </section>
    );
};

export default Home;