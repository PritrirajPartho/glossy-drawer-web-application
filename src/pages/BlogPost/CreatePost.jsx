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
    <div className="container  p-4">
      <h1 className="text-3xl font-semibold mb-4">Create Blog Posts</h1>
      <div className="mb-4 bg-[#DE606B] mr-44 ml-44 p-5">
       
        <textarea
          rows="6"
          cols="5"
          placeholder="Write your new blog post here"
          value={newPostText}
           
          onChange={(e) => setNewPostText(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-4 ml-end">
        <button
          onClick={handlePostNewBlogPost}
          className=" px-4  py-2 bg-[#DE606B] text-white rounded-md hover:bg-blue-600 focus:outline-none"
        >
          Post
        </button>
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
