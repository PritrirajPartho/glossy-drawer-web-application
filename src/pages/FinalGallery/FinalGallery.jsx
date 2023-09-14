// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

// import './FinalGallery.css'
// import slide_image1 from '../../assets/img1.jpeg'
// import slide_image2 from '../../assets/img2.jpeg'
// import slide_image3 from '../../assets/img3.jpeg'
// import slide_image4 from '../../assets/img4.jpeg'
// import slide_image5 from '../../assets/img5.jpeg'
// import slide_image6 from '../../assets/img6.jpeg'
// import slide_image7 from '../../assets/img7.jpeg'

// import { HiArrowLeft, HiArrowNarrowLeft, HiArrowRight} from "react-icons/hi";
// const FinalGallery = () => {
//     return (
//         <div className='container'>
//             <h2 className='text-center'>Digital Art Gallery </h2>
//             <Swiper
//                 effect={'coverflow'}
//                 grabCursor={true}
//                 centeredSlides={true}
//                 loop={true}
//                 slidesPerView={'auto'}
//                 coverflowEffect={{
//                     rotate: 0,
//                     stretch: 0,
//                     depth: 100,
//                     modifier: 2.5,
//                 }}
//                 pagination={{ el: '.swiper-pagination', clickable: true }}
//                 navigation={{
//                     nextEl: '.swiper-button-next',
//                     prevEl: '.swiper-button-prev',
//                     clickable: true,
//                 }}
//                 modules={[EffectCoverflow, Pagination, Navigation]}
//                 className="swiper_container"
//             >
//                 <SwiperSlide>
//                     <img src={slide_image1} alt="" />
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <img src={slide_image2} alt="" />
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <img src={slide_image3} alt="" />
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <img src={slide_image4} alt="" />
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <img src={slide_image5} alt="" />
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <img src={slide_image6} alt="" />
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <img src={slide_image7} alt="" />
//                 </SwiperSlide>
//                 <div className="slider-controler">
//                     <div className="swiper-button-prev slider-arrow">
//                         <HiArrowLeft></HiArrowLeft>
//                     </div>
//                     <div className="swiper-button-next slider-arrow">
//                         <HiArrowRight></HiArrowRight>
//                     </div>
//                     <div className="swiper-pagination"></div>
//                 </div>
//             </Swiper>
//         </div>
//     );
// };

// export default FinalGallery;