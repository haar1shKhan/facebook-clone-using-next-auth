import Image from 'next/image'
import React from 'react'
import { ShareIcon,ChatIcon,ThumbUpIcon } from '@heroicons/react/outline'

const Post = ({image,name,postImage,email,timestamp,message}) => {
  return (
    <div className='flex flex-col'> 
        <div className='bg-white p-5 rounded-t-xl shadow-sm mt-5'>
            <div className='flex items-center space-x-2'>
                <img src={image} height={40} width={40} className='rounded-full' alt="" />
                <div>
                  <p className='font-medium'>{name}</p>
                  <p className='text-xs text-gray-400'>{new Date(timestamp?.toDate()).toLocaleString()}</p>
               </div>
             </div>
             <p className='p-5'>{message}</p>
        </div>
            {postImage && 
                <div className='relative h-56 md:h-96 bg-white'>
                <Image src={postImage} style={{objectFit:'cover'}} fill  />
                </div>
            }
            <div className='flex justify-between shadow-md rounded-b-2xl bg-white text-gray-400 border-t'>
                <div className='inputIcon rounded-none rounded-bl-2xl'>
                    <ThumbUpIcon className='h-4'/>
                    <p className='text-xs sd:text-base'>Like</p>
                </div>

                <div className='inputIcon rounded-none '>
                    <ChatIcon className='h-4'/>
                    <p className='text-xs sd:text-base'>Comment</p>
                </div>

                <div className='inputIcon rounded-none rounded-b2-2xl'>
                    <ShareIcon  className='h-4'/>
                    <p className='text-xs sd:text-base'>Share</p>
                 </div>
            </div>
    </div>
  )
}

export default Post                 