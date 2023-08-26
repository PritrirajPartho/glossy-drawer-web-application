import React from 'react';
import Instructor from './Instructor/Instructor';
import Course from './Course/Course';
import Slider from './Slider/Slider';
import Review from './Review/Review';

const Home = () => {
    return (
        <section>
            <Slider></Slider>
            <Course></Course>
            <FinalGallery></FinalGallery>
            {/* <Gallery></Gallery> */}
            <Instructor></Instructor>
            
        </section>
    );
};

export default Home;