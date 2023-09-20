import React, { useState, useEffect } from 'react';
const CreatePost = () => {

  const [blogPosts, setBlogPosts] = useState([]);
  const [newPostText, setNewPostText] = useState('');

  useEffect(() => {
    // Fetch blog posts from the server when the component mounts
    fetchBlogPosts();
  }, []);

  const fetchBlogPosts = () => {
    // Replace with actual API call
    fetch('/api/blog-posts')
      .then((response) => response.json())
      .then((data) => {
        setBlogPosts(data);
      })
      .catch((error) => {
        console.error('Error fetching blog posts:', error);
      });
  };

  const handlePostNewBlogPost = () => {
    
    fetch('/api/post-blog', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text: newPostText }),
    })
      .then(() => {
       
        fetchBlogPosts();
      
        setNewPostText('');
      })
      .catch((error) => {
        console.error('Error posting blog post:', error);
      });
  };

  return (
    <div className="  p-4 bg-black text-white ">
      <div className="mb-4 flex flex-col justify-center items-center mx-auto p-5 ">
      <h1 className="text-3xl font-semibold mb-10 text-center ">Create Blog Posts</h1>
       <input
       className="py-3 w-[400px] p-3 rounded"
        type="text" placeholder="Blog title here"/>
       <input
        className="py-3 w-[400px] p-3 rounded bg-white text-black my-5"
       type="file" placeholder=""/>
       <input
        className="py-3 w-[400px] p-3 rounded bg-white text-black mb-5"
       type="date" placeholder=""/>
        <textarea
        
          rows="6"
          cols="5"
          placeholder="Write your new blog post here"
          value={newPostText}
           
          onChange={(e) => setNewPostText(e.target.value)}
          className="w-[400px] p-2 border border-gray-300 rounded-md"
        />
        <div className="mb-4  ">
        <button
          onClick={handlePostNewBlogPost}
          className=" px-4  py-2 bg-[#DE606B] text-white rounded-md hover:bg-blue-600 focus:outline-none  mt-10 ml-[330px] "
        >
          Post
        </button>
      </div>
      </div>
      
      <div>
        {blogPosts.map((post) => (
          <div key={post.id} className="mb-4 p-4 border border-gray-300 rounded-md">
            <p>{post.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CreatePost;
