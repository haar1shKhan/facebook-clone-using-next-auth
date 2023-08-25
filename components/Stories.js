import { useSession } from 'next-auth/react'
import React from 'react'
import StoryCard from './StoryCard'



const Stories = () => {
    const { data: session } = useSession()

    const stories =[
        {
            name: session.user.name,
            profile: session.user.image,
            src: "https://scontent.ffjr1-3.fna.fbcdn.net/v/t39.30808-6/293026514_2274520049390234_4767686785587152436_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=174925&_nc_ohc=TIMFr758rB4AX-NdAU8&_nc_ht=scontent.ffjr1-3.fna&oh=00_AfD6COF-l_B8qy2NOX2c-5BUcauSAjg-FwBg1MaoZyNSAg&oe=6433C841",
    
        },
        {
            name:"Elon Musk",
            src:'http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcSStEXQ52SE6txqvnwfAyOZ-dt6fkkBqzcir0RaZkoG54dYK7UByieR90Nb18ON4rdZ6VyDNVuQdk1kXik',
            profile:'http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcSStEXQ52SE6txqvnwfAyOZ-dt6fkkBqzcir0RaZkoG54dYK7UByieR90Nb18ON4rdZ6VyDNVuQdk1kXik',
        },
        {
            name:"Ratan Tata",
            src:"http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcR2OIBC4ai6__woXzFywGOaYTS0dOvQx0PoIHB5BLVnz2CO0sMjZ5s7YgKQzuc_b5sTQxxaI8sTWzWjCYs",
            profile:'https://image.cnbcfm.com/api/v1/image/101189249-RatanNTata.jpg?v=1384233393&w=740&h=416&ffmt=webp&vtcrop=y'
        },
        {
            name:"Elon Musk",
            src:'http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcSStEXQ52SE6txqvnwfAyOZ-dt6fkkBqzcir0RaZkoG54dYK7UByieR90Nb18ON4rdZ6VyDNVuQdk1kXik',
            profile:'http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcSStEXQ52SE6txqvnwfAyOZ-dt6fkkBqzcir0RaZkoG54dYK7UByieR90Nb18ON4rdZ6VyDNVuQdk1kXik',

        }
    ]


  return (
    
    <div className='flex justify-center space-x-3 mx-auto'>
        {stories.map((story,index)=>{

           return <StoryCard key={index} src={story.src} name={story.name} profile={story.profile}/>

        })}
    </div>
  )
}

export default Stories
