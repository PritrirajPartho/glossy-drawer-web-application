import React from 'react';
import Instructor from './Instructor/Instructor';
import Course from './Course/Course';
import Gallery from '../../Gallery/Gallery';

const Home = () => {
    return (
        <section>
            <Course></Course>
            <Gallery></Gallery>
            <Instructor></Instructor>
        </section>
    );
};

export default Home;