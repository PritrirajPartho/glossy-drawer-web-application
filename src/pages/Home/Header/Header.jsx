
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';


const Header = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error));
    }

    return (

        <div

            className="navbar shadow-lg bg-[#1D2E42] text-[#FFFFFF] sticky top-0 z-50 transition duration-300 ease-in-out backdrop-invert"
            style={{ transition: "all 0.3s ease" }}>

            <div className="navbar dropdown lg:hidden ml-[-30px]"

            >
                <label tabIndex={0} className="btn btn-ghost lg:hidden text-white ">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5  " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>



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

                                <li className='hover:bg-[#DE606B]  rounded '><a className='hover:text-white'>Events</a></li>
                                <Link to="">
                                    <li className='hover:bg-[#DE606B]  rounded '><a className='hover:text-white'>FAQ</a></li>
                                </Link>
                                <Link to="/contact">
                                    <li className='hover:bg-[#DE606B]  rounded '><a className='hover:text-white'>Help Center</a></li>

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

                </ul>

            </div>
            {/* ... Mobile menu items ... */}
            <div className="navbar ">
                <Link to="/">
                    <img className='md:h-12 md:w-12 h-10 w-10 ml-[-60px] md:ml-[10px]' src="https://i.ibb.co/wgCQ68D/paint-icon-0.png" alt="" />
                    <a href="" className="btn btn-ghost normal-case sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold pr-6 text-white  ">Glossy Drawer</a>
                </Link>

            </div>

            {/* ... Desktop menu items ... */}
            <div className="navbar-center hidden lg:flex">
                <ul
                    className="menu menu-horizontal px-1 text-xl text-white md:-ml-[600px]">


                    <Link to="/">
                        <li className="group">
                            <a className="hover:text-[#e98c5d] text-[18px] mr-5">Home</a>
                        </li>
                    </Link>


                    <Link to={`/courses`}>
                        <li className="group">
                            <a className="hover:text-[#e98c5d] text-[18px] mr-5">Courses</a>
                        </li>
                    </Link>
                    <Link to={'/instructors'}>
                        <li className="group">
                            <a className="hover:text-[#e98c5d] text-[18px] mr-5">Instructors</a>
                        </li>
                    </Link>



                    <li className="group relative">
                        <Link onClick={() => setDropdownOpen(!dropdownOpen)}
                            className="hover:text-[#e98c5d] text-[18px] mr-5">
                            <h1 className='text-white'>

                                Learn
                            </h1>

                            <svg
                                className={`hidden text-white fill-current sm:block dark:text-slate-500 ${dropdownOpen ? "rotate-180" : ""
                                    }`}
                                width="12"
                                height="8"
                                viewBox="0 0 12 8"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M0.410765 0.910734C0.736202 0.585297 1.26384 0.585297 1.58928 0.910734L6.00002 5.32148L10.4108 0.910734C10.7362 0.585297 11.2638 0.585297 11.5893 0.910734C11.9147 1.23617 11.9147 1.76381 11.5893 2.08924L6.58928 7.08924C6.26384 7.41468 5.7362 7.41468 5.41077 7.08924L0.410765 2.08924C0.0853277 1.76381 0.0853277 1.23617 0.410765 0.910734Z"
                                    fill=""
                                />
                            </svg>
                        </Link>

                        <ul className="dropdown-content absolute hidden group-hover:block mt-10 py-1 bg-slate-100 text-black shadow-lg rounded-md w-52 px-2 -mr-10 ">
                            <div className="gap-4">
                                <Link to="/blogPost">
                                    <li className='hover:bg-[#DE606B] rounded   '><a className='hover:text-white text-[18px]'>Blog Post</a></li>
                                </Link>
                                <Link to="/event">

                                    <li className='hover:bg-[#DE606B]  rounded '><a className='hover:text-white text-[18px]'>Events</a></li>
                                </Link>

                                <Link to="/faq">
                                    <li className='hover:bg-[#DE606B]  rounded '><a className='hover:text-white text-[18px]'>FAQ</a></li>
                                </Link>
                                <Link to="/contact">
                                    <li className='hover:bg-[#DE606B]  rounded '><a className='hover:text-white text-[18px]'>Contact Us</a></li>
                                </Link>



                            </div>

                        </ul>
                    </li>
                    {user ?

                        <>
                            <Link to={'/dashboard'}>
                                <li className="group">
                                    <a className="hover:text-[#e98c5d] text-[18px] mr-5">Dashboard</a>
                                </li>
                            </Link>
                        </> : <></>

                    }


                </ul>
            </div>


            <div className="navbar-end ">

                <div className="hidden lg:block">

                    <Link to="">
                        <button className="text-white sm:text-base md:text-[18px] lg:text-[18px] xl:text-[18px] font-bold border-2 bg-[#DE606B] border-[#DE606B] px-6 py-2 rounded-[5px] mr-2 lg:mr-4">Create a Design</button>
                    </Link>
                </div>
                {user ?
                    <>
                    </> :
                    <>
                        <Link to="/signup">
                            <button className="text-white text-[10px] md:text-[18px] font-bold border-2 hover:bg-[#DE606B] border-[#DE606B] px-3 py-2 md:px-4 rounded-[5px] mr-1 lg:mr-4">SignUp</button>
                        </Link>
                    </>

                }



                <div className="dropdown dropdown-end">

                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar  ">
                        <div className=" h-10  w-10 rounded-full ">
                            {user ?
                                <>
                                    <img className=" " src={user?.photoURL} />
                                </> :
                                <>
                                    <img src="https://i.ibb.co/w64PTYm/116-1160626-facebook-clipart-blank-user-icon-hd-png-download.png" /></>

                            }


                        </div>
                    </label>
                    {/*  */}
                    {user ?
                        <>
                            <ul tabIndex={0}
                                className="menu menu-sm dropdown-content mt-3 z-[1] text-black p-2 shadow bg-base-100 rounded-box w-52">
                                <Link to="">
                                    <li className="group">
                                        <a className="hover:text-[#e98c5d] mr-5">Profile</a>
                                    </li>
                                </Link>

                                <Link onClick={handleLogOut}>
                                    <li className="group">
                                        <a className="hover:text-[#e98c5d] mr-5">Logout</a>
                                    </li>
                                </Link>

                            </ul>
                        </> :
                        <></>

                    }

                </div>


            </div>

        </div>
    );
};

export default Header;
