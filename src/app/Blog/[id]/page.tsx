 "use client"

import React, { useState } from 'react';
import { PostData } from '@/lib/data';
import Image from 'next/image';

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const Data = PostData.find((blog) => blog.id === params.id);

  // State to store comments and authors
  const [comments, setComments] = useState<{ text: string; author: string }[]>([]);
  const [newComment, setNewComment] = useState('');
  const [author, setAuthor] = useState('');

  if (!Data) {
    return <div>No Post Available</div>;
  }

  // Function to handle adding a comment
  const handleAddComment = () => {
    if (newComment.trim() !== '' && author.trim() !== '') {
      setComments((prevComments) => [
        ...prevComments,
        { text: newComment, author },
      ]);
      setNewComment('');
      setAuthor('');
    }
  };

  return (
    <div>
      {/* Post Title */}
      <h1 className='text-center text-4xl font-mono font-bold'>{Data.title}</h1>

      {/* Post Image */}
      <div className='flex mt-9 justify-center items-center'>
        <Image src={Data.image} alt={Data.title} width={900} height={600} />
      </div>

      {/* Post Description */}
      <div className='flex justify-center items-center text-center'>
        <p className='mt-7 font-bold w-[700px]'>{Data.description}</p>
      </div>

      {/* Comment Section */}
      <div className='mt-10 px-8'>
        <h2 className='text-2xl font-bold'>Comments</h2>

        {/* Displaying Comments */}
        <ul className='list-disc mt-4 ml-6'>
          {comments.map((comment, index) => (
            <li key={index} className='mt-2 text-gray-700'>
              <span className='font-bold'>{comment.author}</span>: {comment.text}
            </li>
          ))}
        </ul>

        {/* Add Comment Form */}
        <div className='mt-6'>
          <input
            type='text'
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder='Your name...'
            className='border p-2 w-full md:w-2/3 rounded mb-2'
          />
          <input
            type='text'
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder='Add a comment...'
            className='border p-2 w-full md:w-2/3 rounded'
          />
          <button
            onClick={handleAddComment}
            className='bg-blue-500 text-white px-4 py-2 mt-2 rounded ml-2'
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
