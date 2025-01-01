import React from 'react'
import Card from '@/components/Card/Card'
import {PostData} from '../../lib/data'
import Link from 'next/link'
const Blog = () => {
  return (
    <div className='w-full h-auto p-4 sm:p-8'>
       {/* main container of cards */}
       <div>
            <h1 className='text-3xl sm:text-4xl lg:text-5xl font-mono font-bold text-center '>
              Discover Pakistan: A Journey Through Its Provinces
              </h1>
            
            <div>
                 <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {PostData.map((post, index) => (
                      <div key={index}> 
                  <Link href={`/Blog/${post.id}`}>
                        <Card 
                        key={index} 
                        id={post.id}
                        image={post.image} 
                        title={post.title} 
                        description={post.description}
                       />
                        </Link>
                        </div>
                   ) )}
                </div>
            </div>
             
    </div>

    </div>
  )
}

export default Blog
