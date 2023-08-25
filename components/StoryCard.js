import Image from 'next/image'
import React from 'react'

const StoryCard = ({src,name,profile}) => {
  return (
    <div className='relative h-14 w-14 md:h-20 md:w-20 lg:h-56 lg:w-32 cursor-pointer overflow-x-hidden p-3'>
        <Image className='absolute z-50 h-10 w-10 object-cover opacity-0 lg:opacity-100 rounded-full  top-1' alt='' width={40} height={40} src={profile}/>
        <Image  fill className='object-cover filter brightness-75 rounded-full  lg:rounded-3xl' alt='' src={src}/>
    </div>
  )
}

export default StoryCard
