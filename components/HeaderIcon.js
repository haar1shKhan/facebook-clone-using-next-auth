import React from 'react'

function HeaderIcon ({Icon}){
  return (
    <div className='flex items-center cursor-pointer md:hover:bg-gray-100 rounded-xl sm:h-14 md:px-10 active:border-b-2 group active:border-blue-500'>
      <Icon className='h-5 text-gray-500 group-hover:text-blue-500 text-center sm:h-7 mx-auto' />
    </div>
  )
}

export default HeaderIcon
