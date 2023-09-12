

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import './FinalGallery.css'
import slide_image1 from '../../assets/img1.jpeg'
import slide_image2 from '../../assets/img2.jpeg'
import slide_image3 from '../../assets/img3.jpeg'
import slide_image4 from '../../assets/img4.jpeg'
import slide_image5 from '../../assets/img5.jpeg'
import slide_image6 from '../../assets/img6.jpeg'
import slide_image7 from '../../assets/img7.jpeg'

// import { HiArrowLeft, HiArrowNarrowLeft, HiArrowRight } from "react-icons/hi";
const FinalGallery = () => {
    return (
        <div>

        <h2 className='text-center text-3xl mb-4 text-slate-800'>Digital Art Gallery</h2>
        <Swiper
            spaceBetween={0}
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}

            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            >
            <div >
                <SwiperSlide><img className='myimg card w-96 h-96 bg-base-100 shadow-xl' src={slide_image1} alt="" /></SwiperSlide>
                <SwiperSlide><img className='myimg card w-96 h-96 bg-base-100 shadow-xl' src={slide_image2} alt="" /></SwiperSlide>
                <SwiperSlide><img className='myimg card w-96 h-96 bg-base-100 shadow-xl' src={slide_image3} alt="" /></SwiperSlide>
                <SwiperSlide><img className='myimg card w-96 h-96 bg-base-100 shadow-xl' src={slide_image4} alt="" /></SwiperSlide>
                <SwiperSlide><img className='myimg card w-96 h-96 bg-base-100 shadow-xl' src={slide_image5} alt="" /></SwiperSlide>
                <SwiperSlide><img className='myimg card w-96 h-96 bg-base-100 shadow-xl' src={slide_image6} alt="" /></SwiperSlide>
                <SwiperSlide><img className='myimg card w-96 h-96 bg-base-100 shadow-xl' src={slide_image7} alt="" /></SwiperSlide>
            </div>

        </Swiper>
            </div>
    );
};

export default FinalGallery;