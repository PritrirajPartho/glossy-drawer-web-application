import React from 'react';
import user from '../../../../../assets/images/user/user-01.png';

const User = () => {
    return (
    <section className='mb-4'>
        <div className="avatar flex justify-center">
            <div className="w-16 rounded-full">
                <img src={user} />
            </div>
        </div> 
        <div className='text-center text-primary font-mono font-bold text-xl mt-3'>
            <h1>Pritiraj Partho</h1>
        </div>
        <div className='text-center  mt-1'>
            <p>I am a Professional Web developer</p>
        </div>
    </section>
    );
};

export default User;