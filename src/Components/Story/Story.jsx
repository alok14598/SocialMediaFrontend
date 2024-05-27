import React from 'react'
import "./Story.scss"
import  AddIcon from '@mui/icons-material/Add';
export default function Story() {

    const stories = [
        {
          id: 1,
          name: "John Doe",
          img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        },
        {
          id: 2,
          name: "John Doe",
          img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        },
        {
          id: 3,
          name: "John Doe",
          img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        },
        {
          id: 4,
          name: "John Doe",
          img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        },
      ];

      
  return (
    <div className='storyContainer'>
         <div className='userInfo'>
            <img src="https://images.pexels.com/photos/18076120/pexels-photo-18076120/free-photo-of-man-in-jeans-and-a-tank-top-sitting-in-grass.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                <AddIcon className='icon'/>

            </div>

        {
            stories.map((story) => (
                <div className='singleStory'> 
                <img src={story.img} />
                <span>{story.name}</span>
                </div>
            ))
        }
      
    </div>
  )
}
