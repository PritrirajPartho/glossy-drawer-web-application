import React from 'react';
import Instructor from './Instructor/Instructor';
import Review from './Review/Review';
import Slider from './Slider/Slider'
import Features from './Features/Features';
// import ServiceItems from '../ServiceItems/ServiceItems';
// import Course from './Course/Course';


const Home = () => {
    return (
        <section>
            <Slider></Slider>
            {/* <ServiceItems></ServiceItems> */}
            <Instructor></Instructor>
            <Review></Review>
            
            <Features></Features>
        </section>
    );
};

export default Home;