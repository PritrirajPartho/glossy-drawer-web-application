import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';


const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };





const ManageCourses = () => {
    const[courses, setCourses] = useState([]);
    useEffect(() =>{
        fetch('https://glossy-drawer-web-application-server.vercel.app/newcourses')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])



   const handleApprove = claass =>{

   }
   const handleDeny  = claass =>{

   }
  const handleFeedback = () =>{}

//-------------------modal related code....
const [modalIsOpen, setIsOpen] = useState(false);

function openModal() {
setIsOpen(true);
}

function closeModal() {
setIsOpen(false);
}

    return (
        <section className="overflow-x-auto mt-6 bg-[#f0fdf4]">
        <table className="table  w-full">
            {/* head */}
            <thead className='text-center text-xl text-boxDark-2'>
                <tr>
                    <th>Photo</th>
                    <th>Name</th>
                    <th>Instructor</th>
                    <th>Price</th>
                    <th>rating</th>
                    <th>Approve</th>
                    <th>Deny</th>
                    <th>Feedback</th>
                </tr>
            </thead>
            <tbody className='text-center text-lg'>
                {
                    courses.map((course, index) => <tr key={course._id}>
                        <td>
                            <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={course.image} alt="Avatar Tailwind CSS Component" />
                            </div>
                            </div>
                        </td>
                        <td>{course.courseName}</td>
                        <td>{course.sellerName}</td>
                        <td>{course.price}</td>
                        <td>{course.rating}</td>

                        <td>
                            <button onClick={() =>  handleApprove(claass)} className="btn btn-sm  text-sm bg-green-400  text-white">Approve</button> 
                        </td>
                        <td>
                            <button onClick={() =>  handleDeny(claass)} className="btn btn-sm  text-sm bg-orange-600  text-white">Deny</button>
                        </td> 
                         <td>
                         <div className='w-full'>
                                <button onClick={openModal} className='btn btn-primary'>Feedback</button>
                                <Modal
                                    isOpen={modalIsOpen}
                                    onRequestClose={closeModal}
                                    style={customStyles}
                                    contentLabel="Example Modal"
                                >   <button className='text-2xl font-bold mb-2 bg-red-500 px-4 rounded' onClick={closeModal}>X</button>
                                    <div className='mb-3'>Give FeedBack as a admin</div>
                                    <form onSubmit={handleFeedback}>
                                        <textarea placeholder="Give feedback as a powerful admin" name='feedback' className="textarea textarea-bordered textarea-lg w-full max-w-xs" ></textarea>
                                        <button className='btn btn-primary mt-2'>Submit</button>
                                    </form>
                                </Modal>
                                </div>
                         </td>
                    </tr>)
                }              
            </tbody>
        </table>
  </section>
    );
};

export default ManageCourses;