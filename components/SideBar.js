import { useSession } from 'next-auth/react'
import React from 'react'
import SideBarRow from './SideBarRow'
import { ChevronDownIcon, ShoppingBagIcon,UserGroupIcon } from '@heroicons/react/outline'
import { CalendarIcon,ClockIcon,DesktopComputerIcon,UserIcon } from '@heroicons/react/solid'

const SideBar = () => {
  const { data: session } = useSession()

  return (
      <div className='mt-5 p-2  max-w-[600px] xl:min-w-[300px]'>
        <SideBarRow src={session.user.image} title={session.user.name}/>
        <SideBarRow Icon={UserIcon} title={'Friends'}/>
        <SideBarRow Icon={UserGroupIcon} title={'Groups'}/>
        <SideBarRow Icon={ShoppingBagIcon} title={'Marketplace'}/>
        <SideBarRow Icon={DesktopComputerIcon} title={'Watch'}/>
        <SideBarRow Icon={CalendarIcon} title={'Event'}/>
        <SideBarRow Icon={ClockIcon} title={'Memories'}/>
        <SideBarRow Icon={ChevronDownIcon} title={'See More'}/>
      
    </div>
  )
}

export default SideBar
