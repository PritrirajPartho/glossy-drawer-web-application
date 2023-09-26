import React, { useContext, useEffect, useState } from 'react';
import "./UserAllPost.css"
import { AuthContext } from '../../providers/AuthProvider';
import UserAllPostCard from './UserAllPostCard/UserAllPostCard';
import Swal from 'sweetalert2';


import contact from "../../assets/Profile/contact.png"
import face from "../../assets/Profile/face.png"
import poLocation from "../../assets/Profile/postLocation.png"
import phone from "../../assets/Profile/call.png"
import photos from "../../assets/Profile/photo.png"






const UserAllPost = () => {
    let { user } = useContext(AuthContext)

    let [allPost, setPostAll] = useState([])
    useEffect(() => {
        fetch("https://glossy-drawer-web-application-server-wine.vercel.app/allPost")
            .then(res => res.json())
            .then(data => setPostAll(data))
    }, [])


    let [poup, setPoup] = useState(false)
    const clseAlertButton = () => {
        setPoup(false)
    }
    const handlePost = () => {
        setPoup(true)
    }

    let handleUserPost = (event) => {
        event.preventDefault()
        let image = event.target.img.value
        let status = event.target.details.value
        let postData = { image, status, email: user?.email, date: "September 12 at 9:58 pm", photo:user?.photoURL, name:user.displayName}
        // console.log(postData)
        fetch("https://glossy-drawer-web-application-server-wine.vercel.app/userPost", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(postData)
        })
            .then(res => res.json())
            .then(data => {

                if (data.insertedId) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your work has been saved',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })

    }


    return (
        <div className="AllPostSee bg-[#F0F2F5] px-0 md:px-48 pb-16">

            <div className="MindOptions bg-white rounded-[10px] p-[20px]">
                <div className="flex pb-3">
                    <div className="overflow-hidden">
                        <img className='w-[50px] h-[50px] rounded-[50%]' src={user?.photoURL} alt="img" />
                    </div>
                    <button onClick={handlePost}>What's on your mind {user?.displayName}?</button>
                </div>
            </div>

            <div className="AllPostCard">

                {
                    allPost.map(allP => <UserAllPostCard key={allP._id} AllPostU={allP}></UserAllPostCard>)
                }
            </div>

            {/* ============================================================= */}

            <div className={`alertContainer  px-4 lg:px-0 w-full lg:w-[500px]  ${poup === true && "showAlertJs"}`} >

                <div className="poup ">
                    <div className="popInfo px-4 mt-3">
                        <h6>Create Post</h6>
                        <hr />
                        <div className="flex items-center pt-4">
                            <div className="img rounded-[50%] w-[50px] h-[50px] overflow-hidden">
                                <img className='w-[100%] h-[100%]' src={user?.photoURL} alt="img" />
                            </div>
                            <h2 className='pl-2 text-[18px] text-black font-[800]'>{user?.displayName}</h2>
                        </div>
                        <form onSubmit={handleUserPost}>

                            <textarea placeholder={`What's on your mind , ${user?.displayName}`} name="details" id="" cols="30" rows="10"></textarea>
                            <input name='img' placeholder='Enter Your Image' type="text" />

                            <div className="AddPostOptions md:flex justify-between">
                                <h3>Add to your post</h3>
                                <div className="flex items-center pt-3 md:pt-0">
                                    <img className='pr-3' src={photos} alt="" />
                                    <img className='pr-3' src={contact} alt="" />
                                    <img className='pr-3' src={face} alt="" />
                                    <img className='pr-3' src={poLocation} alt="" />
                                    <img className='pr-3' src={phone} alt="" />
                                    <i class="text-[18px] fa fa-ellipsis-h" aria-hidden="true"></i>
                                </div>
                            </div>

                            <button type="submit">Post</button>

                        </form>

                    </div>
                    <button onClick={clseAlertButton} className="removeAlertBtn"><i className="fa fa-times-circle" aria-hidden="true"></i></button>
                </div>

            </div>

            {/* ============================================================= */}







        </div>
    );
};

export default UserAllPost;