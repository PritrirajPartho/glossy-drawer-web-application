import React from 'react';
import { Link } from 'react-router-dom';

const ServiceItems = () => {
    return (
        <div className='bg-[#fff] my-24 md:h-[300px]'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mx-4 sm:mx-8 md:mx-16 lg:mx-24 py-4 sm:py-8 md:py-24 lg:py-20 gap-3'>
                <div
                    className='shadow-xl bg-slate-500 h-full w-full rounded-xl md:h-56 md:w-56 px-4 sm:px-10 py-4 sm:py-10 text-white hover:text-black hover:bg-[#DE606B] hover:rounded-xl hover:duration-500 hover:md:w-60 hover:md:h-56 hover:sm:h-56 font-normal hover:font-medium  '>
                    <Link className='text-center ' to="">
                    <img className='h-12 sm:h-16 w-12 sm:w-16 mx-auto' src="https://i.ibb.co/C04PB20/803764-paint-512x512.png" alt="Painting" />
                        <h1 className='mt-2 sm:mt-3 text-lg sm:text-2xl font-semibold'>Painting</h1>
                        <p className='text-center text-[14px] font-medium  py-2 italic  hover:text-white hover:font-bold'>“I dream my painting and I paint my dream.”</p>
                    </Link>
                </div>
                <div
                    className='shadow-xl bg-slate-500 h-full w-full rounded-xl md:h-56 md:w-56 px-4 sm:px-10 py-4 sm:py-10 text-white hover:text-black hover:bg-[#DE606B] hover:rounded-xl hover:duration-500 hover:md:w-60 hover:md:h-56 hover:sm:h-56 font-normal hover:font-medium  '>
                    <Link className='text-center ' to="">
                    <img className='h-12 sm:h-16 w-12 sm:w-16 mx-auto' src="https://i.ibb.co/vHpqhwV/1506207.png" alt="Sketch" />
                        <h1 className='mt-2 sm:mt-3 text-lg sm:text-2xl font-semibold'>Sketch</h1>
                        <p className='text-center text-[14px] font-medium  py-2 italic  hover:text-white hover:font-bold'>“I dream my Sketching and I Sketch my dream.”</p>
                    </Link>
                </div>
                <div
                    className='shadow-xl bg-slate-500 h-full w-full rounded-xl md:h-56 md:w-56 px-4 sm:px-10 py-4 sm:py-10 text-white hover:text-black hover:bg-[#DE606B] hover:rounded-xl hover:duration-500 hover:md:w-60 hover:md:h-56 hover:sm:h-56 font-normal hover:font-medium  '>
                    <Link className='text-center ' to="">
                    <img className='h-12 sm:h-16 w-12 sm:w-16 mx-auto' src="https://i.ibb.co/wgCQ68D/paint-icon-0.png" alt="Drawing" />
                        <h1 className='mt-2 sm:mt-3 text-lg sm:text-2xl font-bold'>Drawing</h1>
                        <p className='text-center text-[14px] font-medium  py-2 italic  hover:text-white hover:font-bold'>“I dream my Drawing and I Drawing my dream.”</p>
                    </Link>
                </div>
                <div
                    className='shadow-xl bg-slate-500 h-full w-full rounded-xl md:h-56 md:w-56 px-4 sm:px-10 py-4 sm:py-10 text-white hover:text-black hover:bg-[#DE606B] hover:rounded-xl hover:duration-500 hover:md:w-60 hover:md:h-56 hover:sm:h-56 font-normal hover:font-medium  '>
                    <Link className='text-center ' to="">
                    <img className='h-12 sm:h-16 w-12 sm:w-16 mx-auto' src="https://i.ibb.co/PM8Dc68/858307-200.png" alt="Sculpture" />
                        <h1 className='mt-2 sm:mt-3 text-lg sm:text-2xl font-bold'>Sculpture</h1>
                        <p className='text-center text-[14px] font-medium  py-2 italic  hover:text-white hover:font-bold'>“I dream my Sculptureing and I Sculpture my dream.”</p>
                    </Link>
                </div>
                <div
                    className='shadow-xl bg-slate-500 h-full w-full rounded-xl md:h-56 md:w-56 px-4 sm:px-10 py-4 sm:py-10 text-white hover:text-black hover:bg-[#DE606B] hover:rounded-xl hover:duration-500 hover:md:w-60 hover:md:h-56 hover:sm:h-56 font-normal hover:font-medium  '>
                    <Link className='text-center ' to="">
                    <img className='h-14 sm:h-20 w-14 sm:w-20 mx-auto' src="https://i.ibb.co/jT8WTcv/brand-designing-service-500x500.webp" alt="Digital" />
                        <h1 className='mt-2 sm:mt-3 text-lg sm:text-2xl font-bold'>Digital Art</h1>
                        <p className='text-center text-[14px] font-medium  py-2 italic  hover:text-white hover:font-bold'>“I dream my Digital Art and I  Art my dream.”</p>
                    </Link>
                </div>



              
                
                
               
            </div>
        </div>
    );
};

export default ServiceItems;