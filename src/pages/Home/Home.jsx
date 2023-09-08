import React from 'react';
import Instructor from './Instructor/Instructor';
import Review from './Review/Review';
import Slider from '../../pages/Home/Slider/Slider'
import Features from './Features/Features';
<<<<<<< HEAD
import FinalGallery from '../FinalGallery/FinalGallery';
import ServiceItems from '../../pages/ServiceItems/ServiceItems';
=======
import Course from '../../../src/pages/Home/Course/Course';
>>>>>>> c9c9968067bd1b97fc8075fd38d9352b742ed319

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