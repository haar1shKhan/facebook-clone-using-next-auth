import Image from 'next/image'
import React from 'react'

const Contact = ({name,src}) => {
  return (
    <div className='flex relative items-center cursor-pointer rounded-xl hover:bg-gray-200 mb-2 space-x-3 p-2'>
        <Image src={src} height={50} width={50} style={{objectFit:'cover'}} className='rounded-full  h-10 w-10 '/>
        <p>{name}</p>
        <div className='absolute bottom-2 left-7 bg-green-400 rounded-full h-3 w-3'/>
    </div>
  )
}

export default Contact