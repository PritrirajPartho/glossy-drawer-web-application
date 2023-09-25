import React, { useContext, useEffect, useState } from 'react';
import "./Profile.css"
import ProfileCard from './ProfileCards/ProfileCard';
import ProfileBody from './ProfileBody/ProfileBody';
import { AuthContext } from '../../providers/AuthProvider';

const Profile = () => {

    const { user } = useContext(AuthContext);

    let [profile, setProfile] = useState([])
    useEffect(() => {
        fetch(`https://glossy-drawer-web-application-server-wine.vercel.app/unikUser?email=${user.email}`)
            .then(res => res.json())
            .then(data => setProfile(data))
    }, [])

    // console.log(profile)

    return (
        <div className="MaineProfile">
            <div className="px-0 md:px-32">

                {
                    profile.map(Pdata => <ProfileCard key={Pdata.id} profileD={Pdata}></ProfileCard>)
                }

            </div>
            <div className="ProfileBody bg-[#F0F2F5]">
                <div className="px-0 md:px-32">
{/* <h1>hello profile</h1> */}
                    {
                        profile.map(Pdata => <ProfileBody key={Pdata.id} profileD={Pdata}></ProfileBody>)
                    }

                </div>

            </div>



        </div>
    );
};

export default Profile;