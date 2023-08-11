import React from 'react';
import user from "../../../assets/user.mp4";

const Slider = () => {
    return (
        <div className="hero min-h-screen">
            <video className="hero-video h-screen w-full sm:h-screen sm:w-full object-cover sm:object-cover" autoPlay loop muted>
                <source className="sm:h-[200px] " src={user} type="video/mp4" />
            </video>
            <div className="hero-overlay bg-opacity-60 "></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md mx-auto px-4 sm:px-6 lg:max-w-4xl lg:px-8">
                    <h1 className="mb-5 text-2xl sm:text-4xl md:text-5xl font-bold mt-[-200px]">Glossy-Drawer</h1>
                    <p className="mb-5 text-sm sm:text-base">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
                        excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
                        a id nisi.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <button className="bg-blue-900 font-bold text-lg sm:text-xl md:text-2xl pt-3 pb-3">Glossy-Drawer</button>
                        <button className="border border-white font-bold text-lg sm:text-xl md:text-2xl pt-3 pb-3">Glossy-Drawer</button>
                    </div>
                </div>
            </div>
        </div>
    );
};




export default Slider;