
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

        <div className=" navbar shadow-lg bg-[#2f2b27] sticky top-0 z-50 ">

            {/* ... Mobile menu items ... */}
            <div className="navbar dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <img className='md:h-16 md:w-16 h-10 w-10' src="https://i.ibb.co/wgCQ68D/paint-icon-0.png" alt="" />
                <a href="/" className="btn btn-ghost normal-case sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold pr-6 text-white ">Glossy Drawer</a>
                {/* ... Mobile menu items ... */}
                <ul tabIndex={0}
                    className="menu menu-sm dropdown-content z-50 scroll  shadow bg-base-100 text-black rounded-box w-80 h-screen -top-10 -left-5 pt-24">

                    <div className="divider"></div>
                    <Link to="/">
                        <li className="group">
                            <a className="hover:text-[#e98c5d] ">Home</a>
                        </li>
                    </Link>
                    <Link to={`/canvas`}>
                        <li className="group">
                            <a className="hover:text-[#e98c5d] ">Draw</a>
                        </li>
                    </Link>
                    <Link to={'/instructors'}>
                        <li className="group">
                            <a className="hover:text-[#e98c5d] ">Instructors</a>
                        </li>
                    </Link>

                    <li className="group relative">
                        <a className="hover:text-[#e98c5d] ">Learn</a>
                        <ul
                            className="dropdown-content absolute hidden group-hover:block mt-9 bg-slate-300 text-black shadow-lg rounded-md w-80 pr-2 z-50  ">
                            <div className="grid grid-cols-2 gap-4">
                                <Link>
                                    <li className='hover:bg-[#DE606B] rounded   '><a className='hover:text-white'>Blog Post</a></li>
                                </Link>
                                <Link to="/blogPost">
                                    <li className="group">
                                        <a className="hover:text-[#e98c5d] ">Create Account</a>
                                    </li>
                                </Link>
                                <li className='hover:bg-[#DE606B]  rounded '><a className='hover:text-white'>Events</a></li>
                                <li className='hover:bg-[#DE606B]  rounded '><a className='hover:text-white'>Help Center</a></li>

                                <Link to="/dashboard">
                                    <li className='hover:bg-[#DE606B]  rounded '><a className='hover:text-white'>Dashboard</a></li>
                                </Link>

                                <li className='hover:bg-[#DE606B]  rounded '><a className='hover:text-white'>Privacy Policy</a></li>
                                <li className='hover:bg-[#DE606B]  rounded '><a className='hover:text-white'>Investor</a></li>
                                <Link to="/faq">
                                    <li className='hover:bg-[#DE606B]  rounded '><a className='hover:text-white'>FAQ</a></li>
                                </Link>
                            </div>
                        </ul>
                    </li>
                    <Link to="/blogPost">
                        <li className="group">
                            <a className="hover:text-[#e98c5d] ">Blog</a>
                        </li>
                    </Link>
                    <Link to="/contacts">
                        <li className="group">
                            <a className="hover:text-[#e98c5d] ">Contact</a>
                        </li>
                    </Link>
                    <Link to="/contacts">
                        <li className="group">
                            <a className="hover:text-[#e98c5d] ">Contact</a>
                        </li>
                    </Link>
                    <Link to={'/contact'} className="mr-8 font-bold hover:bg-slate-800 hover:text-white px-4 py-3">
                        <li>Contact Us</li>
                    </Link>   
                    </ul>
                </div>

            {/* ... Desktop menu items ... */}
            <div className="navbar-center hidden lg:flex">
                <ul
                    className="menu menu-horizontal px-1 text-xl text-white md:-ml-[600px]">


                    <Link to="/">
                        <li className="group">
                            <a className="hover:text-[#e98c5d] mr-5">Home</a>
                        </li>
                    </Link>
                    <Link to={`/canvas`}>
                        <li className="group">
                            <a className="hover:text-[#e98c5d] mr-5 ">Draw</a>
                        </li>
                    </Link>
                    <Link to={`/canvas`}>
                        <li className="group">
                            <a className="hover:text-[#e98c5d] mr-5">Education</a>
                        </li>
                    </Link>
                    <Link to={'/instructors'}>
                        <li className="group">
                            <a className="hover:text-[#e98c5d] mr-5">Instructors</a>
                        </li>
                    </Link>
                    <li className="group relative">
                        <a className="hover:text-[#e98c5d] mr-5">Learn</a>
                        <ul className="dropdown-content absolute hidden group-hover:block mt-12 py-1 bg-slate-300 text-black shadow-lg rounded-md w-96 px-2 -mr-10 ">
                            <div className="grid grid-cols-2 gap-4">
                                <Link>
                                    <li className='hover:bg-[#DE606B] rounded   '><a className='hover:text-white'>Blog Post</a></li>
                                </Link>
                                <Link to="/blogPost">
                                    <li className="group">
                                        <a className="hover:text-[#e98c5d] ">Create Account</a>
                                    </li>
                                </Link>
                                <li className='hover:bg-[#DE606B]  rounded '><a className='hover:text-white'>Events</a></li>
                                <li className='hover:bg-[#DE606B]  rounded '><a className='hover:text-white'>Help Center</a></li>

                                <Link to="/dashboard">
                                    <li className='hover:bg-[#DE606B]  rounded '><a className='hover:text-white'>Dashboard</a></li>
                                </Link>

                                <li className='hover:bg-[#DE606B]  rounded '><a className='hover:text-white'>Privacy Policy</a></li>
                                <li className='hover:bg-[#DE606B]  rounded '><a className='hover:text-white'>Investor</a></li>
                                <Link to="/faq">
                                    <li className='hover:bg-[#DE606B]  rounded '><a className='hover:text-white'>FAQ</a></li>
                                </Link>
                            </div>
                        </ul>
                    </li>


                </ul>
            </div>


            <div className="navbar-end ">

                <div className="hidden lg:block">

                    <Link to="">
                        <button className="text-white sm:text-base md:text-lg lg:text-xl xl:text-1xl font-bold border-2 bg-[#DE606B] border-[#DE606B] px-6 py-2 rounded-2xl mr-2 lg:mr-4">Create a Design</button>
                    </Link>
                </div>

                <Link to="/SignUp">
                    <button className="text-white text-xl font-bold border-2 hover:bg-[#DE606B] border-[#DE606B] px-5 py-2 rounded-2xl mr-1 lg:mr-4">SignUp</button>
                </Link>


                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar ">

                        <div className="w-10 rounded-full  ">

                            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>


                    </label>
                    <ul tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <Link to="/dashboard">
                            <li className="group">
                                <a className="hover:text-[#e98c5d] mr-5">Dashboard</a>
                            </li>
                        </Link>
                        <Link to="/dashboard">
                            <li className="group">
                                <a className="hover:text-[#e98c5d] mr-5">Settings</a>
                            </li>
                        </Link>
                        <Link onClick={handleLogOut}>
                            <li className="group">
                                <a className="hover:text-[#e98c5d] mr-5">Logout</a>
                            </li>
                        </Link>

                    </ul>
                </div>


            </div>

        </div>
    );
};

export default Header;
