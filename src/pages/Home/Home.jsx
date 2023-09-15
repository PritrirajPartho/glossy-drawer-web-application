import React from 'react';
import Instructor from './Instructor/Instructor';
import Review from './Review/Review';
import Slider from '../../pages/Home/Slider/Slider'
import Features from './Features/Features';
// import ServiceItems from '../../pages/ServiceItems/ServiceItems';
import Course from '../../../src/pages/Home/Course/Course';
import FinalGallery from '../FinalGallery/FinalGallery';
import SmsImplement from '../SmsImplement/SmsImplement';

const Home = () => {
    return (
        <section>
            <Slider></Slider>
            {/* <ServiceItems></ServiceItems> */}
            <Course></Course>
            <Features></Features>
            <Instructor></Instructor>
            <FinalGallery></FinalGallery>
            <SmsImplement></SmsImplement>
            <Review></Review>
        </section>
    );
};

export default Home;