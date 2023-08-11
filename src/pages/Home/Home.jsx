import React from 'react';
import Instructor from './Instructor/Instructor';
import Course from './Course/Course';
import Slider from './Slider/Slider';


const Home = () => {
    return (
        <section>
           <Slider></Slider>
            <Course></Course>
            <Instructor></Instructor>
            
        </section>
    );
};

export default Home;