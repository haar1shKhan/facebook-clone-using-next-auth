import {  CameraIcon, VideoCameraIcon } from '@heroicons/react/solid'
import { EmojiHappyIcon } from '@heroicons/react/outline'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import React, { useRef, useState } from 'react'
import { db, storage } from '@/firebase'
import firebase from "firebase/compat/app"

function InputBox () {

  const { data: session } = useSession()
  const inputRef = useRef(null)
  const fileClick = useRef(null)
  const [imageToPost, setimageToPost] = useState(null)


  const handleClick = (e) => {
    e.preventDefault();

    if (!inputRef.current.value) return;

    db.collection("post").add({
      message: inputRef.current.value,
      name: session.user.name,
      email: session.user.email,
      image: session.user.image,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    }).then(doc=>{
        if(imageToPost){
            const uploadImage = storage.ref(`post/${doc.id}`).putString(imageToPost,'data_url')

            removeImg()

            uploadImage.on('state_change',null,err=>console.log(err),()=>{

                storage.ref('post').child(doc.id).getDownloadURL().then(url=>{
                    db.collection('post').doc(doc.id).set({postImage:url},{merge:true})
                })

            })

        }
    });

        inputRef.current.value = "";
     };

  const handleFileUpload = (e) => {
    const filereader = new FileReader();
    if (e.target.files[0]) {
      filereader.readAsDataURL(e.target.files[0]);
    }

    filereader.onload = (e) => {
      setimageToPost(e.target.result);
    };
  };

  const removeImg =()=>{
    setimageToPost(null)
    fileClick.current.value=null
  }



  return (
    <div className='bg-white mx-auto p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6'>
        <div className='space-x-4 p-4 flex items-center'>
            <Image className='rounded-full' src={session.user.image} height={40} width={40}/>
            <form className='flex flex-1'>
                <input ref={inputRef} className='rounded-full px-5 outline-none bg-gray-100 h-12 flex-grow' type="text" placeholder={`what's on you mind  ${session.user.name}?`} />
                <button type='submit' hidden onClick={handleClick}></button>
            </form>
            {imageToPost && <div onClick={removeImg} className='flex flex-col filter hover:brightness-105 hover:scale-105 transition duration-150 transform cursor-pointer'>    
                <img src={imageToPost} className='h-10 object-contain' alt="" />
                <p  className='text-red-600 text-xs text-center'>remove</p>
                 </div>}
        </div>

        <div className='flex justify-evenly p-5 border-t'>
            <div className='inputIcon'><VideoCameraIcon className='h-7 text-red-600'/>
                <p className='text-xs md:text-sm xl:text-base'>Live Video</p>
            </div>
            <div  onClick={()=>{fileClick.current.click()}}  className='inputIcon'><CameraIcon className='text-green-400 h-7'/>
                 <p className='text-xs md:text-sm xl:text-base'>Photo/Video</p>
                <input ref={fileClick} hidden onChange={handleFileUpload} type='file' />

            </div>
            <div className='inputIcon'>
                <EmojiHappyIcon className='h-7 text-yellow-400'/>
                <p className='text-xs md:text-sm xl:text-base'>Feeling/Activity</p>

            </div>
        </div>
    </div>
  )
}

export default InputBox
