import React from 'react';
import Instructor from './Instructor/Instructor';
import Course from './Course/Course';

const Home = () => {
    return (
        <section>
            <Course></Course>
            <Instructor></Instructor>
        </section>
    );
};

export default Home;