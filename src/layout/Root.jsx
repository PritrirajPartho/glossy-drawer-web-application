import React from 'react';

import Header from '../pages/Home/Header/Header';
import Footer from '../pages/Home/Footer/Footer';
import { Outlet } from 'react-router-dom';
// import BackToTopButton from '../routes/BackToTopButton/BackToTopButton';

const Root = () => {
    return (
    <section>
        <Header></Header>
        <Outlet></Outlet>
        {/* <BackToTopButton></BackToTopButton> */}
        <Footer></Footer>
    </section>
    );
};

export default Root;