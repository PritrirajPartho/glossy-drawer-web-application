import React from 'react';
import Instructor from './Instructor/Instructor';
import Review from './Review/Review';
import Course from './Course/Course';
import Slider from './Slider/Slider';
import Gallery from './Gallery/Gallery';


const Home = () => {
    return (
        <section>
            <Slider></Slider>
            <Course></Course>
            <Instructor></Instructor>
            <Review></Review>  
            <Review></Review>
            <Gallery></Gallery>
        </section>
    );
};

export default Home;