import React from 'react';

const InstructorReview = ({instructor}) => {
    const{id,img,name,course, email,student} = instructor;
    
    return (
      <div>
        <div>
          <div>
            <a
              href=""
              aria-label="View Item"
              className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
            >
              <div className="flex flex-col  h-[460px] w-[384px]">
                <img src={img} className="object-cover w-full h-60" alt="" />
                <div className="flex-grow border border-t-0 rounded-b">
                  <div className="p-5 ">
                    <h1 className="mt-6 mb-4 text-red-400 text-center text-2xl font-bold leading-5">{name}</h1>
                    <div className="text-left text-xl">
                      <p className="font-semibold mb-2">
                        <span className=" font-semibold text-amber-600">
                          Course:
                        </span>{" "}
                        {course}
                      </p>
                      <p className="font-semibold mb-2">
                        <span className="text-lg font-semibold text-amber-600">
                          Email:
                        </span>{" "}
                        {email}
                      </p>
                      <p className="font-semibold mb-2">
                        <span className="text-lg font-semibold text-amber-600">
                          Student:
                        </span>{" "}
                        {student}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    );
};

export default InstructorReview;