import React from 'react';
import { Link } from 'react-router-dom';
import PostCard from './PostCard';
const BlogPost = () => {
    const posts = [
        {
            title: 'Tutorials and Guides',
            content: 'Create step-by-step tutorials and guides on different drawing techniques, styles, or tools. You can use images, videos, or interactive demonstrations to help users learn.',
            image: 'https://i.ibb.co/mFTdYqq/6a6801f1b9eee7c91c8430ed090244af.jpg',
        },
        {
            title: 'Drawing Challenges',
            content: ' Organize drawing challenges or contests for your users. Provide themes or prompts and encourage them to participate. You can showcase the best submissions on your website.',
            image: 'https://i.ibb.co/K7myY8c/R.jpg',
        },
        {
            title: 'Artist Profiles',
            content: ' Feature profiles of talented artists, both amateur and professional. Include their portfolios, interviews, and insights into their creative process.',
            image: 'https://i.ibb.co/9V7yKnZ/syndication-v20.png',
        },
        {
            title: 'Art Galleries',  
            content: 'Review and recommend art supplies such as pencils, paints, sketchbooks, and digital drawing tablets. Provide links to purchase these items.',
            image: 'https://i.ibb.co/TBn2kGq/download.jpg',
        },
        {
            title: 'Art Supplies Reviews',
            content: 'Set up forums or discussion boards where users can interact, share their work, ask for feedback, and discuss various art-related topics.',
            image: 'https://i.ibb.co/rmD0YtJ/OIP.jpg',
        },
        {
            title: 'Community Forums',
            content: 'Share tips, tricks, and shortcuts for various drawing software and techniques. Help users improve their skills.',
            image: 'https://i.ibb.co/2tGMLP9/OIP.jpg',
        },
        {
            title: 'Drawing Tips and Tricks',
            content: 'Explore the history of art, highlight famous artists, and discuss art movements. Provide inspiration for users own creative journeys',
            image: 'https://i.ibb.co/wdPGG71/R.jpg',
        },
        {
            title: 'Art History and Inspirations',
            content: 'C Offer online drawing workshops and courses. You can charge for premium courses or offer some for free to attract a wider audience.',
            image: 'https://i.ibb.co/N9rcMRk/art-history-3-2.jpg',
        },
        {
            title: 'Online Workshops and Courses',
            content: ' Offer online drawing workshops and courses. You can charge for premium courses or offer some for free to attract a wider audience.',
            // image: 'https://i.ibb.co/1zFSmq8/Group331.png',
            image: 'https://i.ibb.co/qJ7F9Kb/R.jpg',
        },

    ];

    return (
        <div>
            <div
                style={{
                    backgroundImage: `url('https://i.ibb.co/1zFSmq8/Group331.png')`,
                    backgroundSize: 'cover',
                    width: '100%',
                    height: '400px',
                }}
                className=" sm:h-screen flex flex-col justify-center items-center mb-10">
                <div className="text-center ">
                    <h1 className="text-black text-5xl font-semibold">Publish your passions, your way</h1>
                    <p className="text-black text-2xl my-5">Create a unique and beautiful blog easily.</p>
                    <Link to="/CreatePost">
                        <button className="text-white text-[10px] md:text-[18px] font-bold border-2 bg-[#DE606B] hover:bg-black[#DE606d] border-[#DE606B] px-3 py-2 md:px-5 md:py-4 rounded-[5px] mr-1 lg:mr-4">Create Your Blog</button>
                    </Link>

                </div>
            </div>

            <div>
                <h1 className="text-center text-2xl font-bold underline px-5 py-10">All Blogs</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {posts.map((post, index) => (
                        <PostCard key={index} {...post} />
                    ))}
                </div>

            </div>
        </div >
    );
};

export default BlogPost;