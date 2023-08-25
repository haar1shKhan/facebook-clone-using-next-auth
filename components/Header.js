import Image from 'next/image'
import React from 'react'
import {BellIcon,ChatIcon,ChevronDownIcon,HomeIcon,UserGroupIcon,ViewGridIcon} from "@heroicons/react/solid"
import {FlagIcon,PlayIcon,SearchIcon,ShoppingCartIcon} from '@heroicons/react/outline'
import HeaderIcon from './HeaderIcon'
import { useSession } from 'next-auth/react'

function Header() {

  
  const { data: session } = useSession()

  console.log('session',session);

  return (
    <div className='sticky z-50 top-0 flex items-center bg-white p-2 lg:px-5 shadow-md' >

      <div className='flex items-center'>
        <Image src='https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png' alt='' width={60} height={60}/>

        <div className='flex items-center bg-gray-100  rounded-full p-2 ml-2'>
            <SearchIcon className='h-6 text-gray-600'/>
            <input className='ml-2 hidden md:inline-flex items-center bg-transparent outline-none placeholder-gray-500 flex-shrink' placeholder='search' type="text"  />
        </div>

      </div>

      <div className='flex justify-center flex-grow'>

        <div className='flex space-x-6 md:space-x-2' > 
            <HeaderIcon Icon={HomeIcon}/>
            <HeaderIcon Icon={FlagIcon}/>
            <HeaderIcon Icon={PlayIcon}/>
            <HeaderIcon Icon={UserGroupIcon}/>
            <HeaderIcon Icon={ShoppingCartIcon}/>
        </div>

      </div>
      <div className='flex items-center sm:space-x-2 justify-end'>

        <Image src={session.user.image} height={40} className='rounded-full' alt='' width={40}/>
        <p className=' font-semibold whitespace-nowrap pr-3'>{session.user.name}</p>
        <ViewGridIcon className='icon'/>
        <ChatIcon className='icon'/>
        <BellIcon className='icon'/>
        <ChevronDownIcon className='icon'/>
      </div>

    </div>
  )
}

export default Header
