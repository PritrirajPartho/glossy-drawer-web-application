import React from 'react';

const PostCard = ({ title, content, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 cursor-pointer">
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-md" />
      <h2 className="text-xl font-semibold mt-2">{title}</h2>
      <p className="mt-2">{content}</p>
    </div>
  );
};

export default PostCard;