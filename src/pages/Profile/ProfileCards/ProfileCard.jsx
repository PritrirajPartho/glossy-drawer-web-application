import React, { useState } from 'react';
import "./ProfileCards.css"

const ProfileCard = ({ profileD }) => {

    let { id,
        _id,
        banner,
        photo,
        name,
        totalFrinds,
        intro,
        Lives,
        relations,
        Jobs,
        School,
        Collage,
        Profesonal,
        Location,
        role,
        email
    } = profileD


    let [poup, setPoup] = useState(false)
    const clseAlertButton = () => {
        setPoup(false)
    }
    const handleUpdateProfile = () => {
        setPoup(true)
    }


    let handleUserPost = (event) => {
        event.preventDefault()

        let nameValue=event.target.name.value
        let photoValue=event.target.photo.value
        let TolatFdValue=event.target.totalFd.value
        let bannerValue=event.target.banner.value
        let introValue=event.target.intro.value
        let JobsValue=event.target.Jobs.value
        let profesonalValue=event.target.Profesonal.value
        let schoolValue=event.target.School.value
        let collageValue=event.target.Collage.value
        let LivesValue=event.target.Lives.value
        let relationsValue=event.target.relations.value
        let LocationValue=event.target.Location.value

        let allUpData={nameValue,photoValue,TolatFdValue,bannerValue,introValue,JobsValue,profesonalValue,schoolValue,collageValue,LivesValue,relationsValue,LocationValue}
        console.log(allUpData)

        fetch(`https://glossy-drawer-web-application-server.vercel.app/updateUser/${_id}`,{
            method:"PUT",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(allUpData)
        })
        .then(res=> res.json())
        .then(data=> {
            console.log(data)
            if(data.modifiedCount > 0){
                alert("Profile is update sucessfully")
            }
        })






    }





    return (
        <div className='ProfileCard'>

            <div className="top">

                <div className="Banner h-[254px] w-[100%]">
                    <img className="w-[100%] h-[100%] rounded-md" src={banner} alt="" />
                </div>

                <div className="PhotoSetting md:flex justify-between ">
                    <div className="md:flex">
                        <div className="Photo">
                            <img className="w-[100%] h-[100%]" src={photo} alt="img" />
                        </div>
                        <div className="name mt-[-82px] md:mt-0 pl-[20px] pt-[3px] md:pt-[10px]">
                            <h2>{name}</h2>
                            <h3>{totalFrinds} <span className='ml-1'>Frinds</span></h3>
                        </div>
                    </div>

                    <div className="ButtonSetting pt-[14px] md:pt-[28px]">
                        {/* <button className='Story mr-[12px]'><i class="fa fa-plus pr-1" aria-hidden="true"></i> Add to story</button> */}
                        <button onClick={handleUpdateProfile} className='Edit mr-[12px]'><i class="fa fa-pencil pr-1" aria-hidden="true"></i> Edit Profile</button>
                        <button className='Down '><i class="fa fa-chevron-down" aria-hidden="true"></i></button>
                    </div>

                </div>

                {/* <div className="role px-2 md:px-0 mt-[16px] md:mt-[-74px]"></div> */}

                {/* <div className="DetailsOptionsSetting flex justify-between">
                    <div className="allBtn">
                    <button className='Post'>Post</button>
                    <button>About</button>
                    <button>Friends</button>
                    <button>Photo</button>
                    <button>Video</button>
                    <button>Check-ins</button>
                    <button>More <i class="fa fa-caret-down pl-1" aria-hidden="true"></i></button>
                    </div>


                    <button className='dotted'><i class="fa fa-ellipsis-h" aria-hidden="true"></i></button>
                </div> */}

            </div>

            {/* ============================================================= */}


            <div className={`alertContainer h-[400px] overflow-scroll  px-4 lg:px-0 w-full lg:w-[650px]  ${poup === true && "showAlertJs"}`} >

                <div className="poup ">
                    <div className="popInfo px-4 mt-3">
                        <h6>Edite Profile</h6>
                        <hr />
                        <div className="flex items-center pt-4">
                            <div className="img rounded-[50%] w-[50px] h-[50px] overflow-hidden">
                                <img className='w-[100%] h-[100%]' src={photo} alt="img" />
                            </div>
                            <h2 className='pl-2 text-[18px] text-black font-[800]'>{name}</h2>
                        </div>

                        <form onSubmit={handleUserPost}>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-3">
                                <div>
                                    <h3 className='text-[16px] font-semibold '>Change your name</h3>
                                    <input className='w-[100%]' name='name' defaultValue={name} type="text" />
                                </div>
                                <div>
                                    <h3 className='text-[16px] font-semibold '>Change your Photo</h3>
                                    <input className='w-[100%]' name='photo' defaultValue={photo} type="text" />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-3">
                                <div>
                                    <h3 className='text-[16px] font-semibold '>Change your Banner</h3>
                                    <input className='w-[100%]' name='banner' defaultValue={banner} type="text" />
                                </div>
                                <div>
                                    <h3 className='text-[16px] font-semibold '>Change your Frinds</h3>
                                    <input className='w-[100%]' name='totalFd' defaultValue={totalFrinds} type="text" />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-3">
                                <div>
                                    <h3 className='text-[16px] font-semibold '>Change your Bio</h3>
                                    <input className='w-[100%]' name='intro' defaultValue={intro} type="text" />
                                </div>
                                <div>
                                    <h3 className='text-[16px] font-semibold '>Change your Jobs</h3>
                                    <input className='w-[100%]' name='Jobs' defaultValue={Jobs} type="text" />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-3">
                                <div>
                                    <h3 className='text-[16px] font-semibold '>Change your Profesonal</h3>
                                    <input className='w-[100%]' name='Profesonal' defaultValue={Profesonal} type="text" />
                                </div>
                                <div>
                                    <h3 className='text-[16px] font-semibold '>Change your School</h3>
                                    <input className='w-[100%]' name='School' defaultValue={School} type="text" />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-3">
                                <div>
                                    <h3 className='text-[16px] font-semibold '>Change your Collage</h3>
                                    <input className='w-[100%]' name='Collage' defaultValue={Collage} type="text" />
                                </div>
                                <div>
                                    <h3 className='text-[16px] font-semibold '>Change your Lives</h3>
                                    <input className='w-[100%]' name='Lives' defaultValue={Lives} type="text" />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-3">
                                <div>
                                    <h3 className='text-[16px] font-semibold '>Change your relations</h3>
                                    <input className='w-[100%]' name='relations' defaultValue={relations} type="text" />
                                </div>
                                <div>
                                    <h3 className='text-[16px] font-semibold '>Change your relations</h3>
                                    <input className='w-[100%]' name='Location' defaultValue={Location} type="text" />
                                </div>
                            </div>

                            <button className='updateButton' type="submit">Update Now</button>

                        </form>

                    </div>
                    <button onClick={clseAlertButton} className="removeAlertBtn"><i className="fa fa-times-circle" aria-hidden="true"></i></button>
                </div>

            </div>

            {/* ============================================================= */}





        </div>
    );
};

export default ProfileCard;