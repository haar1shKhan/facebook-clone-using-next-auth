import { db } from '@/firebase';
import React from 'react'
import { useCollection } from 'react-firebase-hooks/firestore';
import Post from './Post';

function Posts()  {

    const [posts,loading,error] =  useCollection(
        db.collection("post").orderBy('timestamp','desc')
    )

   

  return (
    <div className=' '>
        {
          posts?.docs.map((post)=>{

            return <Post 
                     
                    id ={post.data().id}
                    name = {post.data().name}
                    image = {post.data().image}
                    postImage = {post.data().postImage}
                    timestamp = {post.data().timestamp}
                    email = {post.data().email}
                    message={post.data().message}
            
                    />

        })
            
        }
    </div>
  )
}

export default Posts
