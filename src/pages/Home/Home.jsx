import React from 'react';
import Instructor from './Instructor/Instructor';
import Review from './Review/Review';
import Slider from './Slider/Slider'
import Course from './Course/Course';
import Gallery from './Gallery/Gallery';
import FinalGallery from '../../pages/FinalGallery/FinalGallery'


const Home = () => {
    return (
        <section>
            <Slider></Slider>
            <Course></Course>
            <Instructor></Instructor>
            <Review></Review>
             <FinalGallery></FinalGallery>
        </section>
    );
};

export default Home;