
import React from 'react';
// import { FaGreaterThan } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <footer className="bg-[#1D2E42] py-10 text-white ">
            <div className='text-center py-4'>
                <div className='mb-5'>

                    <h1 className='text-white text-3xl font-bold text-center '>Glossy-Drawer</h1>
                    <p className='text-gray-400 mt-3'>subscribes to our mailing list</p>
                </div>
                <div className="join mb-10">
                    <input className="input input-bordered join-item" placeholder="Your Email" />
                    <button className="btn join-item rounded-full bg-[#e98c5d]">Subscribe</button>
                </div>
            </div>
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    <div className='text-left '>
                        <h2 className="text-white font-bold text-xl mb-4" >Menu</h2>
                        <Link to={'/'}>
                            <p className="text-gray-400 flex items-center">
                                Home</p>
                        </Link>
                        <Link to={'/courses'}>
                            <p className="text-gray-400 flex items-center">
                                Courses</p>
                        </Link>
                        <Link to={'/login'}>
                            <p className="text-gray-400 flex items-center">
                                Login</p>
                        </Link>
                        <Link to={'/faq'}>
                            <p className="text-gray-400 flex items-center">
                                FAQ</p>
                        </Link>
                        <Link to={'/contact'}>
                            <p className="text-gray-400 flex items-center">
                                Contact</p>
                        </Link>
                    </div>

                    <div className='text-left'>
                        <h4 className="text-white font-bold text-xl">Courses</h4>
                        <p className="text-gray-400 mt-4">Painting </p>
                        <p className="text-gray-400">Sketch </p>
                        <p className="text-gray-400">Drawing </p>
                        <p className="text-gray-400">Digital </p>
                    </div>
                    <div className='text-left'>
                        <h4 className="text-white font-bold text-xl">Contacts</h4>
                        <p className="text-gray-400 mt-4">+8801764676589</p>
                        <p className="text-gray-400">wdevelopers360@gmail.com</p>
                        <p className="text-gray-400 ">Dhaka Building (Ground Floor)</p>
                        <p className="text-gray-400">Dhaka-4000, Bangladesh</p>

                    </div>
                    <div className='text-left '>
                        <h4 className="text-white font-bold text-xl ">Socials</h4>
                        <p className="text-gray-400 mt-4">Facebook</p>
                        <p className="text-gray-400">Dribble</p>
                        <p className="text-gray-400">Instagram</p>
                        <p className="text-gray-400">Twitter</p>
                    </div>


                </div>

                <div className="divider divider-vertically w-full h-1 bg-white my-4"></div>
                <div className="text-center">
                    <p className="text-gray-400">&copy; 2023  Glossy-Drawer All rights reserved.</p>
                    <ul className="list-inline">
                        <li className="list-inline-item"><a href="#" className="text-gray-400">Privacy Policy</a></li>
                        <li className="list-inline-item"><a href="#" className="text-gray-400">Terms of Service</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;