import React from 'react';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <div className="bg-[url('/backgroundImg.jpg')] bg-cover bg-center w-full h-screen flex items-center justify-center">
      <div className="text-center px-4 sm:px-8 md:px-16 lg:px-24">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-mono font-bold text-gray-800 mb-4">
          Welcome to My Blog
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-4 sm:mb-8 font-bold max-w-3xl mx-auto">
          A hub for passionate readers, curious minds, and anyone eager to explore new ideas and stories. On this blog, 
          you will find a wide range of topics that will inspire, educate, and entertain you. Whether you are here to 
          dive deep into tech trends, discover new life hacks, explore the world through travel experiences, or gain 
          insights into personal development, you are in the right place!
        </p>

        {/* Button */}
        <button
          type="button"
          className="w-[180px] h-[30px] sm:w-[220px] sm:h-[60px] bg-gray-700 text-white rounded-lg transform hover:scale-105 hover:bg-gray-900 hover:shadow-lg"
        >
          <Link href="/Blog">
            See What&#39;s New
          </Link>
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
