import React from 'react'
import "./Comments.scss"

export default function Comments() {

    const comments = [
        {
          id: 1,
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
          name: "John Doe",
          userId: 1,
          profilePicture:
            "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          id: 2,
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
          name: "Jane Doe",
          userId: 2,
          profilePicture:
            "https://images.pexels.com/photos/20021272/pexels-photo-20021272/free-photo-of-woman-sitting-on-a-bucket.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
      ];
  return (
    <div className='commentsSection'>
        <div className='selfComments'>
        <img  className="commentpic" src="https://images.pexels.com/photos/18076120/pexels-photo-18076120/free-photo-of-man-in-jeans-and-a-tank-top-sitting-in-grass.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <input placeholder='Write a Comment...' />
        <button>Send</button>
        </div>
        <div className='userComment'>
        {
            comments.map((comment) => (
                <div className='usersubcomments'>
            <img src={comment.profilePicture}/>
                 
                <div className='usercommentinfo'>
                    <span>{comment.name}</span>
                    <span className='desc'>{comment.desc}</span>
                </div>
                    <span>1 min ago</span>
                </div>
            
            )
            )
        }

        </div>
      
    </div>
  )
}
