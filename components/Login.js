import Image from 'next/image'
import React from 'react'
import { signIn } from "next-auth/react"

const Login = () => {
  return (
    <div className='grid place-content-center'>
        <Image src='https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png' height={400} width={400} alt=''/>
        <h1 onClick={() => signIn()} className='bg-blue-600 p-5 cursor-pointer mt-3 rounded-full text-white text-center'> Login with Facebook</h1>
      
    </div>
  )
}

export default Login
