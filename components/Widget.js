import React from 'react'
import { SearchIcon } from '@heroicons/react/outline'
import { DotsHorizontalIcon,VideoCameraIcon } from '@heroicons/react/solid'
import Contact from './Contact'

const Widget = () => {

    const contacts =[
        {
            name: 'Haarish Khan',
            src: "https://scontent.ffjr1-3.fna.fbcdn.net/v/t39.30808-6/293026514_2274520049390234_4767686785587152436_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=174925&_nc_ohc=TIMFr758rB4AX-NdAU8&_nc_ht=scontent.ffjr1-3.fna&oh=00_AfD6COF-l_B8qy2NOX2c-5BUcauSAjg-FwBg1MaoZyNSAg&oe=6433C841",
    
        },
        {
            name:"Elon Musk",
            src:'http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcSStEXQ52SE6txqvnwfAyOZ-dt6fkkBqzcir0RaZkoG54dYK7UByieR90Nb18ON4rdZ6VyDNVuQdk1kXik',
        },
        {
            name:"Ratan Tata",
            src:"http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcR2OIBC4ai6__woXzFywGOaYTS0dOvQx0PoIHB5BLVnz2CO0sMjZ5s7YgKQzuc_b5sTQxxaI8sTWzWjCYs",
        },
        {
            name:"Elon Musk",
            src:'http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcSStEXQ52SE6txqvnwfAyOZ-dt6fkkBqzcir0RaZkoG54dYK7UByieR90Nb18ON4rdZ6VyDNVuQdk1kXik',
        }
    ]

  return (
    <div className='hidden lg:flex flex-col w-60 p-4 mt-3'>
        <div className='flex justify-between items-center text-gray-500 '>
            <h2 className='text-xl'>Contacts</h2>
            <div className='flex space-x-2'>
                <VideoCameraIcon className='h-6'/>
                <SearchIcon className='h-6'/>
                <DotsHorizontalIcon className='h-6'/>
            </div>
        </div>
        {contacts.map(contact=>{
            return <Contact name={contact.name} src={contact.src}/>
        })}
    </div>
  )
}

export default Widget