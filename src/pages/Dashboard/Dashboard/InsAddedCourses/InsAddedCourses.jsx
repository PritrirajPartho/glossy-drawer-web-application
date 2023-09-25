
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { AuthContext } from "../../../providers/AuthProvider";


const InsAddedCourses = () => {

     const [myInsclass, setMyInsClass] = useState([]);
     const [loading, setLoading] = useState(true);
   
     // const { user } = useContext(AuthContext);
   
     useEffect(() => {
       fetch(`https://glossy-drawer-web-application-server-wine.vercel.app/newcourses`)
         .then((res) => res.json())
         .then((data) => {
           console.log(data);
           setMyInsClass(data);
           setLoading(false);
         });
     }, []);

     return (
          <div className="w-full p-4 bg-[#f0fdf4]">

               <h1 className="text-4xl font-semibold text-center my-12">INSTRUCTOR ADDED CLASS</h1>
    
          <div className="overflow-x-auto ">
            <table className="table table-zebra w-full">
              {/* head */}
              <thead>
                <tr>
                  <th>#</th>
                  <th>Image</th>
                  <th>Course Name</th>
                  <th>Instructor Name</th>
                  <th>Email</th>
                  <th>Rating</th>
                  <th>Price</th>
                  <th>Status</th>
                  <th>Feedback</th>
                </tr>
              </thead>
              <tbody>
                {myInsclass.map((newcls, index) => (
                  <tr key={newcls._id}>
                    <th>{index + 1}</th>
                    <td>
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={newcls.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </td>
                    <td>{newcls.courseName}</td>
                    <td>{newcls.sellerName}</td>
                    <td>{newcls.postedBy}</td>
                    <td>{newcls.rating}</td>
                    <td>${newcls.price}</td>
                    <td className="text-gray-900 font-semibold">{newcls.status}</td>
                    <td>{newcls.feedback}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <Link to="/dashboard" className="btn btn-neutral flex justify-center my-12">Go Back to Dashboard</Link>
          </div>
        </div>
     );
};

export default InsAddedCourses;