import React from 'react';

const InstructorReview = ({instructor}) => {
    const{id,img,name,course, email,student} = instructor;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
            <img src={img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
            <h2 className="card-title text-2xl">{course}</h2>
            <h2 className="card-title  font-mono text-pink-600">{name}</h2>
            <p><strong className='mr-2'>Email:</strong>{email}</p>
            <div className="card-actions">
            <button className="btn btn-primary mt-4">Buy Course</button>
            </div>
        </div>
        </div>
    );
};

export default InstructorReview;