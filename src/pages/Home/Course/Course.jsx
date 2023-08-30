import React, { useEffect, useState } from 'react';
import Courses from './Courses';

const Course = () => {
    const [data, setData] = useState([]);


    useEffect(() => {
        fetch('/public/courses.json')
            .then(res => res.json())
            .then(data => { setData(data) })
    }, [])

    console.log(data)
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="mb-10 md:mx-auto sm:text-center md:mb-12">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                    <span className="relative inline-block">
                        <span className="relative">Our Best Courses
                        </span>
                    </span>{' '}

                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                    Whether you want to learn to draw anatomy, perspective, cartoons, or architecture, online courses can help you get started. All courses are suitable for beginners but even if you have some experience, you can still learn something new!
                </p>
                <div className="grid gap-5 mb-8 mt-10 lg:grid-cols-3 ">
                    {
                        data.map(detail => <Courses
                            key={detail.id}
                            detail={detail}
                        ></Courses>)
                    }

                </div>

            </div>

        </div>
    );
};

export default Course;