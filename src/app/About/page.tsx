import React from 'react'

import Image from 'next/image';


const About = () => {
  return (
    

<div className=" md:flex border-b-4 border-red-400 bg-white">
  {/* Text Section */}
  <div className="w-full h-auto  px-6 py-12 md:px-24 md:py-24 text-center md:text-left">
    <h1 className="text-4xl md:text-6xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500">
      Hi, I am Muhammad Taha
    </h1>
    <p className="text-lg md:text-xl mt-6 md:mt-9 font-serif leading-relaxed font-medium ">
      I am a passionate Frontend Developer with expertise in crafting responsive and visually appealing web applications. My skill set includes Tailwind CSS, custom CSS, shadcn, Next.js, HTML, TypeScript, JavaScript, and design tools like Figma. I have experience integrating headless CMS solutions such as Sanity to build dynamic and scalable web solutions. Currently, I am expanding my skill set by delving into backend development, aiming to become a versatile full-stack developer.
    </p>
  </div>

  {/* Image Section */}
  <div className="flex justify-center md:justify-end items-center px-6 py-6 md:p-11">
    <Image
      src="/AboutImg/taha.jpg"
      alt="Profile-Pic"
      width={300}
      height={300}
      className="rounded-[50%]  shadow-black shadow-[0px_4px_20px_0px_rgba(0,0,0,0.5)]"
    />
  </div>





</div>

     
 

    
  )
}

export default About
