

import Image from 'next/image'

import React from 'react'
  type propCard={
    id:string,
    image:string,
    title:string,
    description:string,
  }
const Card = ({image,title,description} :propCard) => {
  return (
    <div className='flex flex-col transition justify-center p-2 bg-white items-center border-2 border-secondary rounded-lg hover:scale-105'>
      <Image
      src={image}
      alt={title}
      width={500}
      height={300}
      className='w-full h-48 rounded-md mb-4'
      
      />
      <h1 className='font-bold text-2xl font-serif py-5 '>{title}</h1>
      <p className='mb-4 line-clamp-2'>{description}</p>
      <div className='flex justify-center items-center'>
            <button type="button" className="text-blue-500 font-bold hover:underline  text-2xl">Read More &rarr;</button>
             </div>
    </div>
  )
}

export default Card

























// import React from 'react'
// import Image from 'next/image'
// import Link from 'next/link'

// const Card = () => {
//   return (
//       <div className='w-full h-auto p-8'>
//         {/* main container of cards */}
//         <div className=''>
//             <h1 className='text-5xl font-mono font-bold text-center '>Discover Pakistan: A Journey Through Its Provinces</h1>

//          {/*1st card */}
//          <div className='w-[350px] h-[400px] rounded-md bg-white '>
//              {/* <Image src={""} alt='' width={} height={}/> */}
            
//              <h1 className='font-serif font-bold text-3xl text-center'>SINDH</h1>
//              <div className='flex justify-center items-center'>
//              <Link href="your-link-here" className="text-blue-500 font-bold hover:underline  text-3xl">Read More &rarr;</Link>
//              </div>
//          </div>

//     {/*2nd card */}
//     <div className='w-[350px] h-[400px] rounded-md bg-white '>
//              {/* <Image src={""} alt='' width={} height={}/> */}
            
//              <h1 className='font-serif font-bold text-3xl text-center'>Punjab</h1>
//              <div className='flex justify-center items-center'>
//              <Link href="your-link-here" className="text-blue-500 font-bold hover:underline  text-3xl">Read More &rarr;</Link>
//              </div>
//          </div>

//  {/*3rd card */}
//  <div className='w-[350px] h-[400px] rounded-md bg-white '>
//              {/* <Image src={""} alt='' width={} height={}/> */}
            
//              <h1 className='font-serif font-bold text-3xl text-center'>Khyber Pakhtunkhwa</h1>
//              <div className='flex justify-center items-center'>
//              <Link href="your-link-here" className="text-blue-500 font-bold hover:underline  text-3xl">Read More &rarr;</Link>
//              </div>
//          </div>



//           {/*4rth card */}
//           <div className='w-[350px] h-[400px] rounded-md bg-white '>
//              {/* <Image src={""} alt='' width={} height={}/> */}
            
//              <h1 className='font-serif font-bold text-3xl text-center'>Balochistan</h1>
//              <div className='flex justify-center items-center'>
//              <Link href="your-link-here" className="text-blue-500 font-bold hover:underline  text-3xl">Read More &rarr;</Link>
//              </div>
//          </div>




//           {/*5th card */}
//           <div className='w-[350px] h-[400px] rounded-md bg-white '>
//              {/* <Image src={""} alt='' width={} height={}/> */}
            
//              <h1 className='font-serif font-bold text-3xl text-center'>Gilgit-Baltistan</h1>
//              <div className='flex justify-center items-center'>
//              <Link href="your-link-here" className="text-blue-500 font-bold hover:underline  text-3xl">Read More &rarr;</Link>
//              </div>
//          </div>


//         </div>
















//     </div>
//   )
// }

// export default Card
