import React from 'react';
import Instructor from './Instructor/Instructor';
import Review from './Review/Review';
import Slider from './Slider/Slider'
import Gallery from './Gallery/Gallery';
// <<<<<<< devb
// import Course from './Course/Course';
// =======
// import Features from './Features/Features';
// >>>>>>> development

import Course from './Course/Course';
import Slider from './Slider/Slider';
import Contacts from '../Contacts/Contacts';
import Review from './Review/Review';

const Home = () => {
    return (
        <section>
            <Slider></Slider>
            <Course></Course>
            <Instructor></Instructor>
            <Review></Review>
            <Features></Features>
            <Gallery></Gallery>
            <FinalGallery></FinalGallery>
            {/* <Gallery></Gallery> */}
            <Instructor></Instructor>
            <Contacts></Contacts>
        </section>
    );
};

export default Home;