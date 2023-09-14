

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './style.css';

import img2 from "../../../assets/gallery/img2.jpeg"
import img3 from "../../../assets/gallery/img3.jpeg"

import img5 from "../../../assets/gallery/img5.jpeg"
import img6 from "../../../assets/gallery/img6.jpeg"
import img7 from "../../../assets/gallery/img7.jpeg"

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

const Gallery = () => {
     return (
          <div className=' my-10 py-14 bg-gradient-to-r from-blue-50 to-cyan-100'>

                  <h1 className='text-2xl md:text-5xl text-center font-medium mb-8'>Take a Look</h1>

                <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          // slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper swap"
      >
       
        <SwiperSlide  className='spslider'>
          <img src={img2} />
        </SwiperSlide>
        <SwiperSlide  className='spslider'>
          <img src={img3} />
        </SwiperSlide >
        <SwiperSlide  className='spslider'>
          <img src={img5} />
        </SwiperSlide>
        <SwiperSlide  className='spslider'>
          <img src={img6} />
        </SwiperSlide>
        <SwiperSlide  className='spslider'>
          <img src={img7} />
        </SwiperSlide>
      </Swiper>
    </>
          </div>
     );
};

export default Gallery;