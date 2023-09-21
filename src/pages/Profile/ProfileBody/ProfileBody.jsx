import React, { useContext, useEffect, useState } from 'react';
import "./ProfileBody.css"
import location from "../../../assets/Profile/location.png"
import cap from "../../../assets/Profile/cap.png"
import job from "../../../assets/Profile/job.png"
import love from "../../../assets/Profile/love.png"
import home from "../../../assets/Profile/home.png"
import live from "../../../assets/Profile/live.png"
import photos from "../../../assets/Profile/photo.png"
import event from "../../../assets/Profile/event.png"
import Post from '../Post/Post';

import contact from "../../../assets/Profile/contact.png"
import face from "../../../assets/Profile/face.png"
import poLocation from "../../../assets/Profile/postLocation.png"
import phone from "../../../assets/Profile/call.png"
import { AuthContext } from '../../../providers/AuthProvider';
import Swal from 'sweetalert2';


const ProfileBody = ({ profileD }) => {



    const { user} = useContext(AuthContext);

    let { id, banner, photo, name, totalFrinds, intro, Lives, relations, Jobs, School, Collage, Profesonal, Location } = profileD

    let [post, setPost] = useState([])

    useEffect(() => {
        fetch(`https://glossy-drawer-web-application-server.vercel.app/post?email=${user.email}`)
            .then(res => res.json())
            .then(data => setPost(data))
    }, [])

    let [poup, setPoup] = useState(false)
    const clseAlertButton = () => {
        setPoup(false)
    }
    const handlePost = () => {
        setPoup(true)
    }
   
    // console.log(user)

    let handleUserPost=(event)=>{
        event.preventDefault()
        let image=event.target.img.value
        let status=event.target.details.value
        let postData={image,status,email:user?.email,date:"September 12 at 9:58 pm",name,photo}
        // console.log(postData)
        fetch("https://glossy-drawer-web-application-server.vercel.app/userPost",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(postData)
        })
        .then(res=> res.json())
        .then(data=> {

            if(data.insertedId){
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
        <div className='BodyAllParent py-6'>

            <div className="BodyMain md:flex gap-5">

                <div className="IntroBio bg-white rounded-[10px] w-[100%] md:w-[50%] h-[675px] ">
                    <div className="Intro">
                        <h3>Intro</h3>
                        <p className='text-center mx-[20px]'>{intro}</p>
                        <button>Edit Bio</button>
                        <h4 className='flex items-center pt-3'><img className='mr-2 text-red-500' src={job} alt="img" /> <span className='font-bold pr-1'>Work</span> {Jobs}</h4>
                        <h4 className='flex items-center pt-3'><img className='mr-2 text-red-500' src={job} alt="img" /> <span className='font-bold pr-1'>Professional</span> {Profesonal}</h4>
                        <h4 className='flex items-center pt-3'><img className='mr-2 text-red-500' src={cap} alt="img" /> <span className='font-bold pr-1'>Study at</span> {School}</h4>
                        <h4 className='flex items-center pt-3'><img className='mr-2 text-red-500' src={cap} alt="img" /> <span className='font-bold pr-1'>Went to</span> {Collage}</h4>
                        <h4 className='flex items-center pt-3'><img className='mr-2 text-red-500' src={home} alt="img" /> <span className='font-bold pr-1'>Lives in</span> {Lives}</h4>
                        <h4 className='flex items-center pt-3'><img className='mr-2 text-red-500' src={love} alt="img" /> <span className='font-bold pr-1'>It's</span> {relations}</h4>
                        <h4 className='flex items-center pt-3'><img className='mr-2 text-red-500' src={location} alt="img" /> <span className='font-bold pr-1'>From</span> {Location}</h4>
                        {/* <button className='pt-4'>Add Hobbies</button>
                        <button>Add Feature</button>
                        <button>Add Featured</button> */}
                    </div>
                </div>

                <div className="AllPost w-[100%]">

                    <div className="MindOptions bg-white rounded-[10px] p-[20px]">
                        <div className="flex pb-3">
                            <div className="overflow-hidden">
                                <img className='w-[50px] h-[50px] rounded-[50%]' src={photo} alt="img" />
                            </div>
                            <button onClick={handlePost}>What's on your mind?</button>
                        </div>
                        {/* <hr />
                        <div className="flex justify-between gap-3 pt-6">
                            <div className="flex items-center">
                                <img className='pr-2' src={live} alt="" />
                                <h3>Live Video</h3>
                            </div>
                            <div className="flex items-center">
                                <img className='pr-2' src={photos} alt="" />
                                <h3>Photo/Video</h3>
                            </div>
                            <div className="flex items-center">
                                <img className='pr-2' src={event} alt="" />
                                <h3>Life event</h3>
                            </div>
                        </div> */}
                    </div>

                    {/* <div className="PostOptions bg-white rounded-[10px] pt-[20px] px-[20px] mt-4">
                        <div className="flex justify-between pb-3">
                            <h3 className='text-[22px] font-bold'>Post</h3>
                            <div className="flex FilterButton">
                                <button className='mr-[10px]'><i class="fa fa-exchange" aria-hidden="true"></i> Filters</button>
                                <button><i class="fa fa-cog" aria-hidden="true"></i> Manage Post</button>
                            </div>
                        </div>
                        <hr />
                        <div className="flex justify-between ListBtn">
                            <button className='btnOne'><i class="fa fa-bars" aria-hidden="true"></i>List View</button>
                            <button className='btnTow'><i class="fa fa-th-large" aria-hidden="true"></i> Grid View</button>
                        </div>

                    </div> */}

                    {/* ============================================================= */}
                    <div className="UserPost">
                        {
                            post.map(postData => <Post name={name} photo={photo} key={postData.id} postsAll={postData}></Post>)
                        }
                    </div>
                    {/* ============================================================= */}
                </div>
            </div>

            {/* ============================================================= */}

            <div className={`alertContainer  px-4 lg:px-0 w-full lg:w-[500px]  ${poup === true && "showAlertJs"}`} >

                <div className="poup ">
                    <div className="popInfo px-4 mt-3">
                        <h6>Create Post</h6>
                        <hr />
                        <div className="flex items-center pt-4">
                            <div className="img rounded-[50%] w-[50px] h-[50px] overflow-hidden">
                                <img className='w-[100%] h-[100%]' src={photo} alt="img" />
                            </div>
                            <h2 className='pl-2 text-[18px] text-black font-[800]'>{name}</h2>
                        </div>
                        <form onSubmit={handleUserPost}>

                            <textarea placeholder={`What's on your mind , ${name}`} name="details" id="" cols="30" rows="10"></textarea>
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

export default ProfileBody;