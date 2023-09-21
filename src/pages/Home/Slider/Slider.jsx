import React from 'react';
import user from "../../../assets/images/user/drawing.mp4";
import { Link } from 'react-router-dom';

const Slider = () => {
    return (
        <div className="hero min-h-screen">
            <video className="hero-video h-screen w-full sm:h-screen sm:w-full object-cover sm:object-cover" autoPlay loop muted>
                <source className="sm:h-[200px] " src={user} type="video/mp4" />
            </video>
            <div className="hero-overlay bg-opacity-60 "></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md mx-auto px-4 sm:px-6 lg:max-w-4xl lg:px-8">
                    <h1 className="mb-5 text-lg sm:text-4xl md:text-5xl font-bold mt-[-200px]">Pursue Your Passion
                    <br />
                    in
                    <br />
                     <span className='text-[#DE606B]'>Glossy Drawer</span>
                    </h1>
                    <p className="mb-5 text-xl sm:text-base">
                    Get inspired from these simple and easy line drawing ideas and learn how you can get started drawing.
                    </p>
                    <div  className="">
                      <Link to={'/canvas'}>
                         <button 
                            style={{ backgroundImage: " linear-gradient(to right, #de5c70 0%, #e98c5d 51%, #de5c70 100%)" }}
                            className="font-bold text-lg sm:text-xl md:text-2xl py-4  px-10 rounded-xl hover:bg-[#DE606B]">Start Drawing</button>
                      </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};




export default Slider;