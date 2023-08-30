import React from 'react';
import Instructor from './Instructor/Instructor';
import Course from './Course/Course';
import Slider from './Slider/Slider';
import Contacts from '../Contacts/Contacts';


const Home = () => {
    return (
        <section>
           <Slider></Slider>
            <Course></Course>
            <Instructor></Instructor>
            <Contacts></Contacts>
        </section>
    );
};

export default Home;