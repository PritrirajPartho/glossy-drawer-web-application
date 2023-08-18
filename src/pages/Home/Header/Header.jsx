import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Header = () => {

    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error));
    }

    return (
        <div className="navbar bg-blue-950 text-white sticky top-0 z-50">
            <div className="navbar  flex items-center">
                <div className="dropdown lg:hidden">
                    <label tabIndex={0} className="btn btn-ghost">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-6 z-10 p-2 shadow bg-blue-950 rounded-box w-52"
                    >
                        {/* Mobile menu items */}
                        <Link className="block px-4 py-2 hover:bg-slate-800 hover:text-white">
                            Home
                        </Link>
                        <Link className="block px-4 py-2 hover:bg-slate-800 hover:text-white">
                            Draw
                        </Link>
                        <Link className="block px-4 py-2 hover:bg-slate-800 hover:text-white">
                            Sketch
                        </Link>
                        <Link to="/mycourses" className="block px-4 py-2 hover:bg-slate-800 hover:text-white">
                            Courses
                        </Link>
                        <Link className="block px-4 py-2 hover:bg-slate-800 hover:text-white">
                            Gallery
                        </Link>
                        <Link className="mr-8 font-bold hover:bg-slate-800 hover:text-white px-4 py-3">
                        <li>Courses</li>
                    </Link>
                    <Link className="mr-8 font-bold hover:bg-slate-800 hover:text-white px-4 py-3">
                        <li>Instructors</li>
                    </Link>
                        
                    </ul>
                </div>

                <a className="btn btn-ghost normal-case text-2xl font-bold px-2">  Glossy-Drawer</a>
            </div>


<<<<<<< HEAD
                {/* Desktop menu items */}
                <div className='hidden lg:block ml-[-500px]'>
                    <ul className="flex justify-center items-center ">
                        <Link className="mr-8 font-bold sm:hover:bg-slate-800 hover:text-white px-4 py-3">
                            <li>Home</li>
                        </Link>
                        <Link className="mr-8 font-bold hover:bg-slate-800 hover:text-white px-4 py-3">
                            <li>Draw</li>
                        </Link>
                        <Link className="mr-8 font-bold hover:bg-slate-800 hover:text-white px-4 py-3">
                            <li>Sketch</li>
                        </Link>
                        <Link to="/mycourses" className="mr-8 font-bold hover:bg-slate-800 hover:text-white px-4 py-3">
                            <li>Courses</li>
                        </Link>
                        <Link className=" font-bold hover:bg-slate-800 hover:text-white px-4 py-3">
                            <li>Gallery</li>
                        </Link>
                    </ul>
                </div>
=======
            {/* Desktop menu items */}
            <div className='hidden lg:block ml-[-500px]'>
                <ul className="flex justify-center items-center ">
                    <Link className="mr-8 font-bold sm:hover:bg-slate-800 hover:text-white px-4 py-3">
                        <li>Home</li>
                    </Link>
                    <Link className="mr-8 font-bold hover:bg-slate-800 hover:text-white px-4 py-3">
                        <li>Courses</li>
                    </Link>
                    <Link to={'/instructors'} className="mr-8 font-bold hover:bg-slate-800 hover:text-white px-4 py-3">
                        <li>Instructors</li>
                    </Link>
                    <Link to='/singUp' className="mr-8 font-bold hover:bg-slate-800 hover:text-white px-4 py-3">
                        <li>Registration</li>
                    </Link>
                    <Link to={'/dashboard'} className=" font-bold hover:bg-slate-800 hover:text-white px-4 py-3">
                        <li>Dashboard</li>
                    </Link>
                </ul>
            </div>

>>>>>>> main


            <div className="navbar-end  text-white">

                {user ?
                    <ul className="flex items-center space-x-5 lg:flex">
                        <li onClick={handleLogOut}>
                            <Link
                                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-primary hover:bg-purple-700 focus:shadow-outline focus:outline-none"
                                aria-label="Sign up"
                                title="Log Out"
                            >
                                LogOut
                            </Link>
                        </li>
                    </ul>
                    :
                    <li className="flex items-center space-x-3 ml-64 lg:flex">
                        <Link
                            to="/logIn"
                            aria-label="Sign in"
                            title="Sign in"
                            className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-primary hover:bg-purple-700 focus:shadow-outline focus:outline-none"
                        >
                            LogIn
                        </Link>
                    </li>

                }
            </div>
        </div>
    );
};

export default Header;
