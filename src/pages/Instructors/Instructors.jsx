import React, { useEffect, useState } from 'react';
import InstructorsShow from './InstructorsShow';

const Instructors = () => {
    const [instructorss, setInstructorss] = useState([])
    useEffect(() => {
         fetch('../../../public/instructor.json')
         .then(res => res.json())
         .then(data => setInstructorss(data) )
    }, [])

    return (
   <section>
        <h1 className='text-center text-4xl text-blue-800 mt-10 mb-6'>Our Instructors</h1>
        <div className='grid grid-cols-3 gap-6 ms-12 mr-0'>
            {
                instructorss.map(instructor => <InstructorsShow key={instructor.id} instructor={instructor}></InstructorsShow>)
            }
        </div>
   </section>
    );
};

export default Instructors;