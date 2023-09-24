
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from 'firebase/auth';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { FcGoogle } from 'react-icons/fc'
import app from '../../firebase/firebase.config';
import Swal from 'sweetalert2';

const Google = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    const auth = getAuth(app)
    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {

        signInWithPopup(auth, googleProvider)
        .then(result => {
            const loggedInUser = result.user;
            console.log(loggedInUser);
            const savedUser = { name: loggedInUser.displayName, email: loggedInUser.email, role: "student" }
            fetch('http://localhost:5000/users', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(savedUser)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'User created successfully.',
                            showConfirmButton: false,
                            timer: 1500
                        });
                        navigate(from, { replace: true });                                }
                })
                    .then(res => res.json())
                    .then(data => console.log(data))
                console.log(loggedInUser);
                setUser(loggedInUser);
                navigate('/')
            })
            .catch(err => {
                // alert(err.message)
                console.log(err);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: err.message,
                    footer: '<a href="">Why do I have this issue?</a>'
                })

            })
    }


    const handleSignOut = () => {
        signOut(auth)
            .then(result => {
                console.log(result);
                setUser(null);
            })
            .catch(error => {
                console.log(error)
            })
    }


    return (
        <div>

            {
                user ?
                    <button onClick={handleSignOut}>Sign out</button> :
                    <>
                        <div className='flex items-center pt-4 space-x-1'>
                            <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                            <p className='px-3 text-sm dark:text-gray-400'>
                                Login with social accounts
                            </p>
                            <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                        </div>
                        <div
                            onClick={handleGoogleSignIn}
                            className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'
                        >
                            <FcGoogle size={32} />

                            <p>Continue with Google</p>
                        </div>
                    </>
            }
        </div>
    );
};

export default Google;