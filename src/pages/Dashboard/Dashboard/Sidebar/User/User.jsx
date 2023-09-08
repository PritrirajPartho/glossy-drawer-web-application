import React, { useContext } from 'react';
// import user from '../../../../../assets/images/user/user-01.png';
import { AuthContext } from '../../../../../providers/AuthProvider';

const User = () => {
    const{user} = useContext(AuthContext);
    return (
    <section className='mb-4'>
        <div className="avatar flex justify-center">
            <div className="w-16 rounded-full">
                <img src={user?.photoURL} />
            </div>
        </div> 
        <div className='text-center text-primary font-mono font-bold text-xl mt-3'>
            <h1>{user?.displayName}</h1>
        </div>
        <div className='text-center  mt-1'>
            <p>I am a Professional Web developer</p>
        </div>
    </section>
    );
};

export default User;