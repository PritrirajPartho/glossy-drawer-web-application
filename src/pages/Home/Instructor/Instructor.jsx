import React, { useEffect, useState } from 'react';
import InstructorReview from '../InstructorReview/InstructorReview';
import "./Instructor.css"


const Instructor = () => {
    const [instructors, setInstructors] = useState([])
    useEffect(() => {
        fetch('/public/instructor.json')
            .then(res => res.json())
            .then(data => setInstructors(data))
    }, [])

    return (
        <div className='MainInstructor bg-fixed'>


            <div className="Title w-[100%] md:w-[50%] mx-auto text-center">
                <h3>Our All Instructor</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quod. Totam odio reiciendis unde temporibus accusantium dolorum dignissimos architecto?</p>
            </div>

            <div className="px-2 md:px-32 mx-auto">
                <div className='InstructorAllCardItems  grid md:grid-cols-3  gap-5'>
                    {
                        instructors.map(instructor => <InstructorReview key={instructor.id} instructor={instructor}></InstructorReview>)
                    }
                </div>

                <button className='allInstructorSee'>All Instructor</button>
            </div>

        </div>
    );
};

export default Instructor;