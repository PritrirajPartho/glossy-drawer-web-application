import React from 'react';
import Instructor from './Instructor/Instructor';
<<<<<<< HEAD
import Review from './Review/Review';
import Slider from './Slider/Slider'
import Course from './Course/Course';
import Gallery from './Gallery/Gallery';

=======
import Course from './Course/Course';
import Slider from './Slider/Slider';
import Review from './Review/Review';
>>>>>>> 292350063d335ef8cb764a1ee196a6e126a6aed9

const Home = () => {
    return (
        <section>
            <Slider></Slider>
            <Course></Course>
<<<<<<< HEAD
            <Instructor></Instructor>
            <Review></Review>
            <Gallery></Gallery>
=======
            <FinalGallery></FinalGallery>
            {/* <Gallery></Gallery> */}
            <Instructor></Instructor>
            
>>>>>>> 292350063d335ef8cb764a1ee196a6e126a6aed9
        </section>
    );
};

export default Home;