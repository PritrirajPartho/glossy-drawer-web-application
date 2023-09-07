import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper";
import { Rating, ThinStar } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css/pagination";

const myStyles = {
  itemShapes: ThinStar,
  activeFillColor: '#2D1803',
  inactiveFillColor: '#FEFEFE'
}

const Review = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://glossy-drawer-web-application-server.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);


  return (
  <div className="w-full h-full">

<h1 className='text-center text-4xl text-blue-800 mt-10 mb-6'>Review </h1>

       <div className="my-8 bg-fixed bg-[url('https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg')] p-3 rounded shadow">
     
     <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
       {reviews.map((review) => (
         <SwiperSlide key={review._id}>
           <div className="flex flex-col items-center mx-24 my-16">
             <img className="w-56 h-56 rounded-full" src={review.image} alt="" />
             <p className="py-8 text-2xl md:w-[50%] mx-auto text-gray-900">{review.review}</p>
             <h3 className="text-2xl text-blue-800">{review.student_name}</h3>

             <Rating
               style={{ maxWidth: 80 }}
               value={review.rating}
               readOnly
               className="my-3"
               itemStyles={myStyles}
             />
           </div>
         </SwiperSlide>
       ))}
     </Swiper>
 </div>
  </div>
  );
};

export default Review;