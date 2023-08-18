import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
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
                        <Link className="block px-4 py-2 hover:bg-slate-800 hover:text-white">
                            Gallery
                        </Link>
                    </ul>
                </div>

                <a className="btn btn-ghost normal-case text-2xl font-bold px-2">  Glossy-Drawer</a>
            </div>


                {/* Desktop menu items */}
                <div className='hidden lg:block ml-[-500px]'>
                    <ul className="flex justify-center items-center ">
                        <Link className="mr-8 font-bold sm:hover:bg-slate-800 hover:text-white px-4 py-3">
                            <li>Home</li>
                        </Link>
                        <Link className="mr-8 font-bold hover:bg-slate-800 hover:text-white px-4 py-3">
                            <li>Courses</li>
                        </Link>
                        <Link className="mr-8 font-bold hover:bg-slate-800 hover:text-white px-4 py-3">
                            <li>Instructors</li>
                        </Link>
                        <Link className="mr-8 font-bold hover:bg-slate-800 hover:text-white px-4 py-3">
                            <li>Registration</li>
                        </Link>
                        <Link to={'/dashboard'} className=" font-bold hover:bg-slate-800 hover:text-white px-4 py-3">
                            <li>Dashboard</li>
                        </Link>
                    </ul>
                </div>

          

            <div className="navbar-end  text-white">

                <Link className="mr-3 font-bold ">Login</Link>
                <div className="dropdown dropdown-end ">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            {/* <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" /> */}
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content rounded-box w-52 bg-blue-950">
                        <li className='hover:bg-base-100 rounded'>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li className='hover:bg-base-100 rounded'><a>Settings</a></li>
                        <li className='hover:bg-base-100 rounded'><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;
