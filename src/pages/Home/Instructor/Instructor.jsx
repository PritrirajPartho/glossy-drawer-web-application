import React, { useEffect, useState } from 'react';
import InstructorReview from '../InstructorReview/InstructorReview';


const Instructor = () => {
    const [instructors, setInstructors] = useState([])
    useEffect(() => {
         fetch('http://localhost:5000/instructors')
         .then(res => res.json())
         .then(data => setInstructors(data) )
    }, [])

    return (
   <section className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="mb-10 md:mx-auto sm:text-center md:mb-12">
            <h1 className='text-center text-4xl text-blue-800 mt-10 mb-6'>Our Instructors</h1>
            <div className="grid gap-5 mb-8 mt-10 lg:grid-cols-3 ">
                {
                    instructors.map(instructor => <InstructorReview key={instructor.id} instructor={instructor}></InstructorReview>)
                }
            </div>
       </div>
   </section>
    );
};

export default Instructor;