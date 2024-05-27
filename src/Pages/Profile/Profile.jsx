import React from 'react'
import "./Profile.scss"
import ProfileDetail from '../../Components/ProfileDetail/ProfileDetail'
import Post from "../../Components/Post/Post"

export default function Profile() {
  return (
    <div className='Profile'>
     <ProfileDetail />
     <Post />
     <Post />
     <Post />
     <Post />
     <Post />
    </div>
  )
}
