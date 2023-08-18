import React from 'react';
import { StarIcon } from '@heroicons/react/24/solid'
const MyCoursesCard = ({ detail }) => {
     const { img, name, Details, rating, Level, Instructor, price } = detail
     return (
          <div>
                 <div>

<div >
    <a
        href=""
        aria-label="View Item"
        className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
    >
        <div className="flex flex-col h-full">
            <img
                src={img}
                className="object-cover w-full h-48"
                alt=""
            />
            <div className="flex-grow border border-t-0 rounded-b">
                <div className="p-5">
                    <h6 className="mb-2 text-xl font-bold leading-5">
                        {name}
                    </h6>
                    <p className="text-sm font-medium text-left text-gray-900">
                        {Details}
                    </p>
                    <div className="text-left">
                        <p className="font-semibold"><span className="text-lg font-semibold text-amber-600">Instructor:</span>  {Instructor}</p>
                        <p className="font-semibold"><span className="text-lg font-semibold text-amber-600">Level:</span> {Level}</p>
                    </div>
                    <div className="flex gap-28">
                        <p className="font-semibold"><span className="text-lg font-semibold text-amber-600">Price:</span> ${price}</p>
                        <div className="text-base text-right flex gap-3">
                            <div className='flex'>
                                <StarIcon className="h-6 w-6 text-blue-500" />
                                <StarIcon className="h-6 w-6 text-blue-500" />
                                <StarIcon className="h-6 w-6 text-blue-500" />
                                <StarIcon className="h-6 w-6 text-blue-500" />
                                <StarIcon className="h-6 w-6 text-blue-500" />

                            </div>
                            <div><h2>{rating}</h2></div>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <a
                        href="/"
                        className="inline-flex mb-10 items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-purple-400 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
                    >
                        Select
                    </a>
                </div>
            </div>
        </div>
    </a>
</div>

</div> 
          </div>
     );
};

export default MyCoursesCard;