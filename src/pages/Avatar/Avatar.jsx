import { useContext } from "react";

import avatarImg from '../../assets/placeholder.jpg'
import { AuthContext } from "../Provider/AuthProvider";
const Avatar = () => {
    const { user } = useContext(AuthContext)
    return (
        <img
            className='rounded-full mt-1'
            src={user && user?.photoURL ? user?.photoURL : avatarImg}
            alt='profile'
            height='50'
            width='50'
        />
    )
};

export default Avatar;