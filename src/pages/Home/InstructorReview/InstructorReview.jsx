import React from 'react';
import "./InstructorReview.css"

const InstructorReview = ({instructor}) => {
    const{id,img,name,course, email,student} = instructor;

    console.log(instructor)
    
    return (
        <div className="InstructorPartAll">

            <div className="InstructorCard">

                <div className="img">
                    <img className='w-[100%] h-[100%]' src={img} alt="" />
                    <div className="overflow"></div>
                </div>

                <div className="information">

                    <h2>name: {name}</h2>
                    <h2>Course: {course}</h2>
                    <h2>Email: {email}</h2>
                    <h2>Students: {student}</h2>

                </div>

                <div className="buttonPart flex justify-between items-center">
                    <button className='detailsbutton'>Details</button>
                    <button title='Check Your Favorite Instructor' className='favoritebutton'>
                        <i class="fa fa-heart-o" aria-hidden="true"></i>

                        {/* <i class="fa fa-heart" aria-hidden="true"></i> */}
                    </button>
                </div>



            </div>

        </div>
    );
};

export default InstructorReview;