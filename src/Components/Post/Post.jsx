import React, { useState } from 'react'
import "./Post.scss"
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import Comments from "../Comments/Comments.jsx"
import { Link } from 'react-router-dom';

export default function Post() {

  const [openComment, setOpenComment] = useState(false);

  return (
    <div className='post'>

      <div className='postContainer'>
        <div className='usersection'>
          <div className='leftsection'>

            <img src='https://images.pexels.com/photos/18076120/pexels-photo-18076120/free-photo-of-man-in-jeans-and-a-tank-top-sitting-in-grass.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
      <label>  <div className='postdetails' onClick={()=> window.open("./profile", "_self")}>
    
              <span>Alok Verma</span>
              <span style={{ color: 'gray', fontSize: "10px" }}>a few minutes ago</span>
            </div></label>
          </div>
          <div className='rightsection'>
            <div className='detailicon'>

              <MoreHorizIcon />
            </div>

          </div>
        </div>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <img src='https://images.pexels.com/photos/20021272/pexels-photo-20021272/free-photo-of-woman-sitting-on-a-bucket.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className='mainpic' />
        <div className='lastsection'>
          <div className='lastuserInfo'>
            <FavoriteBorderOutlinedIcon />
            <span> 12 Likes</span>
          </div>
          <div className='lastuserInfo' onClick={() => setOpenComment((prev) => !prev)} >
            <ChatOutlinedIcon />
            <span>Comments</span>
          </div>
          <div className='lastuserInfo'>
            <ShareOutlinedIcon />
            <span> Share</span>
          </div>

        </div>
        {openComment && <Comments />
        }

      </div>
    </div>
  )
}
