import React from 'react';
import Instructor from './Instructor/Instructor';
import Review from './Review/Review';
import Slider from './Slider/Slider'
import FinalGallery from '../../pages/FinalGallery/FinalGallery'
import Features from './Features/Features';

import Course from './Course/Course';

const Home = () => {
    return (
        <section>
            <Slider></Slider>
            <Course></Course>
            <Instructor></Instructor>
            <Review></Review>
            <FinalGallery></FinalGallery>
            <Features></Features>
        </section>
    );
};

export default Home;