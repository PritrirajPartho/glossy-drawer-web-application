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
            <Instructor></Instructor>
            <Review></Review>
            <Gallery></Gallery>
            <h1>d</h1>
        </section>
    );
};

export default Home;