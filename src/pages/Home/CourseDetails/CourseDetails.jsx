
import { useLoaderData } from 'react-router-dom';
import { StarIcon } from '@heroicons/react/24/solid'

const CourseDetails = () => {
    const details = useLoaderData();

    const { img, name, Details, rating, Level, Instructor, price, Syllabus } = details
    console.log(details)
    return (

        <div className='m-20 ml-52' >
            <a
                href=""
                aria-label="View Item"
                className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
            >
                <div className="flex flex-col  h-full">
                    <img
                        src={img}
                        className="object-cover  h-96"
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
                                <p className="font-semibold text-lg"><span className="text-lg font-semibold text-amber-600">Instructor:</span>  {Instructor}</p>
                                <p className="font-semibold text-lg"><span className="text-lg font-semibold text-amber-600">Level:</span> {Level}</p>
                            </div>
                            <div className="">
                                <p className="font-semibold text-lg"><span className="text-lg font-semibold text-amber-600">Price:</span> ${price}</p>
                                <div className="text-base text-right flex gap-3">
                                    <p className="font-semibold text-lg"><span className="text-lg font-semibold text-amber-600">Rating:</span></p>
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
                        <div className='ml-5'>
                            <h1 className="font-semibold text-lg"><span className="text-lg font-semibold text-amber-600">Syllabus:</span><br /> 1.{Syllabus[0]}
                                <br />2.{Syllabus[1]} <br /> 3.{Syllabus[2]} <br /> 4.{Syllabus[3]} <br />5.{Syllabus[4]}
                            </h1>

                        </div>

                    </div>
                </div>
            </a>
        </div>
    );
};

export default CourseDetails;