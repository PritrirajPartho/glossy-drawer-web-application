import React from 'react';
import Instructor from './Instructor/Instructor';
import Review from './Review/Review';
import Slider from './Slider/Slider';
import Course from './Course/Course';
import Gallery from './Gallery/Gallery';


const Home = () => {
    return (
        <section>
            <Slider></Slider>
            <Course></Course>
            <Instructor></Instructor>
            <Review></Review>
            <Gallery></Gallery>
        </section>
    );
};

export default Home;