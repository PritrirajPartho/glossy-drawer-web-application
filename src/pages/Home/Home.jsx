import React from 'react';
import Instructor from './Instructor/Instructor';
import Course from './Course/Course';
import Slider from './Slider/Slider';
import Review from './Review/Review';
import Gallery from './Gallery/Gallery';


const Home = () => {
    return (
        <section>
            <Slider></Slider>
            <Course></Course>
            <Gallery></Gallery>
            <Instructor></Instructor>
            <Review></Review>
        </section>
    );
};

export default Home;