import React from 'react';
import Instructor from './Instructor/Instructor';
<<<<<<< HEAD
import Review from './Review/Review';

const Home = () => {
    return (
    <section>
        <Instructor></Instructor>
        <Review></Review>
    </section>
=======
import Course from './Course/Course';
import Slider from './Slider/Slider';


const Home = () => {
    return (
        <section>
           <Slider></Slider>
            <Course></Course>
            <Instructor></Instructor>
            
        </section>
>>>>>>> f19b1efc88c515f65a12900fec15c58865fe406a
    );
};

export default Home;