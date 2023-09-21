// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';

import './FinalGallery.css'
import slide_image1 from '../../assets/gallery/img1.jpeg'
import slide_image2 from '../../assets/gallery/img2.jpeg'
import slide_image3 from '../../assets/gallery/img3.jpeg'
import slide_image4 from '../../assets/gallery/img4.jpeg'
import slide_image5 from '../../assets/gallery/img5.jpeg'
import slide_image6 from '../../assets/gallery/img6.jpeg'
import slide_image7 from '../../assets/gallery/img7.jpeg'


// import { HiArrowLeft, HiArrowNarrowLeft, HiArrowRight } from "react-icons/hi";
const FinalGallery = () => {
    return (
        <div className='my-16'> 

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
            <div>
                <SwiperSlide><img className='myimg card  w-56 h-56 md:w-96 md:h-96 bg-base-100 shadow-xl' src={slide_image1} alt="" /></SwiperSlide>
                <SwiperSlide><img className='myimg card  w-56 h-56 md:w-96 md:h-96 bg-base-100 shadow-xl' src={slide_image2} alt="" /></SwiperSlide>
                <SwiperSlide><img className='myimg card w-56 h-56 md:w-96 md:h-96 bg-base-100 shadow-xl' src={slide_image3} alt="" /></SwiperSlide>
                <SwiperSlide><img className='myimg card w-56 h-56 md:w-96 md:h-96 bg-base-100 shadow-xl' src={slide_image4} alt="" /></SwiperSlide>
                <SwiperSlide><img className='myimg card w-56 h-56 md:w-96 md:h-96 bg-base-100 shadow-xl' src={slide_image5} alt="" /></SwiperSlide>
                <SwiperSlide><img className='myimg card w-56 h-56 md:w-96 md:h-96 bg-base-100 shadow-xl' src={slide_image6} alt="" /></SwiperSlide>
                <SwiperSlide><img className='myimg card w-56 h-56 md:w-96 md:h-96 bg-base-100 shadow-xl' src={slide_image7} alt="" /></SwiperSlide>
            </div>
        </Swiper>
            </div>
    );
};

export default FinalGallery;