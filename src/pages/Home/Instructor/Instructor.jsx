import React, { useEffect, useState } from 'react';
import InstructorReview from '../InstructorReview/InstructorReview';

const Instructor = () => {
    const [instructors, setInstructors] = useState([])
    useEffect(() => {
         fetch('/public/instructor.json')
         .then(res => res.json())
         .then(data => setInstructors(data) )
    }, [])

    return (
   <section>
        <h1 className='text-center text-4xl mt-10 mb-6'>Our Instructors</h1>
        <div className='grid grid-cols-3 gap-6 ms-12 mr-0'>
            {
                instructors.map(instructor => <InstructorReview key={instructor.id} instructor={instructor}></InstructorReview>)
            }
        </div>
   </section>
    );
};

export default Instructor;