import React from 'react'
import "./Feed.scss"
import friend from "../../assets/friend.png"
import map from "../../assets/map.png";
import ing from "../../assets/img.png";


export default function Feed() {
  return (
    <div className='feedContainer'>
      <div className='userInfo'>
            <img src="https://images.pexels.com/photos/18076120/pexels-photo-18076120/free-photo-of-man-in-jeans-and-a-tank-top-sitting-in-grass.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                <textarea placeholder="What's on your mind...."/>
      </div>
      <hr />
        <div className='info'>
            <div className='information'>
            <div className='insideinfo'>
            <img src={ing} />
               <span>Add Image</span>
            </div>
            <div className='insideinfo'>
            <img src={map} />
              <span>Add Place</span>
            </div>
            <div className='insideinfo'>
            <img src={friend} />
              <span>Add Friend</span>
            </div>
            </div>
            <button>Share</button>
        </div>
    </div>
  )
}
