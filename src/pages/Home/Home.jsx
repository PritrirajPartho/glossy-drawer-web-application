import React from 'react';
import Instructor from './Instructor/Instructor';
import Review from './Review/Review';
import Slider from './Slider/Slider';
import Course from './Course/Course';


const Home = () => {
    return (
        <section>
           <Slider></Slider>
            <Course></Course>
            <Instructor></Instructor>
            <Review></Review>  
        </section>
    );
};

export default Home;