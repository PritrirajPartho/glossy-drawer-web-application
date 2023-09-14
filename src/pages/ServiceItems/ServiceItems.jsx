import React from 'react';
import { Link } from 'react-router-dom';

const ServiceItems = () => {
    return (
        <div className='bg-gray-600 py-6'> 
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mx-4 sm:mx-8 md:mx-16 lg:mx-24 py-4 sm:py-8 md:py-16 lg:py-20 gap-3'>
                <div
                    className='shadow-xl h-full w-full md:h-52 md:w-52 px-4 sm:px-10 py-4 sm:py-10 hover:text-blue-600 hover:bg-white hover:rounded-xl border-4 border-t-zinc-200 '>
                    <Link className='text-center ' to="">
                        <img className='h-12 sm:h-16 w-12 sm:w-16 mx-auto' src="https://i.ibb.co/C04PB20/803764-paint-512x512.png" alt="Painting" />
                        <h1 className='mt-2 sm:mt-3 text-lg sm:text-2xl font-bold'>Painting</h1>
                    </Link>
                </div>
                <div
                    className='shadow-xl h-full w-full md:h-52 md:w-52   px-4 sm:px-10 py-4 sm:py-10 hover:text-blue-600 hover:bg-white hover:rounded-xl border-4 border-t-zinc-200'>
                    <Link className='text-center ' to="">
                        <img className='h-12 sm:h-16 w-12 sm:w-16 mx-auto' src="https://i.ibb.co/vHpqhwV/1506207.png" alt="Sketch" />
                        <h1 className='mt-2 sm:mt-3 text-lg sm:text-2xl font-bold'>Sketch</h1>
                    </Link>
                </div>
                <div
                    className='shadow-xl h-full w-full md:h-52 md:w-52 px-4 sm:px-10 py-4 sm:py-10 hover:text-blue-600 hover:bg-white hover:rounded-xl border-4 border-t-zinc-200'>
                    <Link className='text-center ' to="">
                        <img className='h-12 sm:h-16 w-12 sm:w-16 mx-auto' src="https://i.ibb.co/wgCQ68D/paint-icon-0.png" alt="Drawing" />
                        <h1 className='mt-2 sm:mt-3 text-lg sm:text-2xl font-bold'>Drawing</h1>
                    </Link>
                </div>
                <div
                    className='shadow-xl h-full w-full md:h-52 md:w-52 px-4 sm:px-10 py-4 sm:py-10 hover:text-blue-600 hover:bg-white hover:rounded-xl border-4 border-t-zinc-200'>
                    <Link className='text-center ' to="">
                        <img className='h-12 sm:h-16 w-12 sm:w-16 mx-auto' src="https://i.ibb.co/PM8Dc68/858307-200.png" alt="Sculpture" />
                        <h1 className='mt-2 sm:mt-3 text-lg sm:text-2xl font-bold'>Sculpture</h1>
                    </Link>
                </div>
                <div
                    className='shadow-xl h-full w-full md:h-52 md:w-52 px-4 sm:px-10 py-4 sm:py-10 hover:text-blue-600 hover:bg-white hover:rounded-xl border-4 border-t-zinc-200'>
                    <Link className='text-center ' to="">
                        <img className='h-14 sm:h-20 w-14 sm:w-20 mx-auto' src="https://i.ibb.co/jT8WTcv/brand-designing-service-500x500.webp" alt="Digital" />
                        <h1 className='mt-2 sm:mt-3 text-lg sm:text-2xl font-bold'>Digital</h1>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceItems;