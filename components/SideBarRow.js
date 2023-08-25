import Image from 'next/image'
import React from 'react'

const SideBarRow = ({Icon,src,title}) => {
  return (
    <div className='flex space-x-2 cursor-pointer items-center p-2 hover:bg-gray-400 rounded-xl' >
        {src && <Image src={src} className='rounded-xl' alt='' height={30} width={30}/>}
        {Icon && <Icon className='text-blue-500 h-8 w-8'/>}
        <p className='hidden font-medium sm:inline-flex'>{title}</p>
    </div>
  )
}

export default SideBarRow
