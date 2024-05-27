import React from 'react'
import "./ProfileDetail.scss"
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LanguageIcon from '@mui/icons-material/Language';
import EmailIcon from '@mui/icons-material/Email';
import MoreVertIcon from '@mui/icons-material/MoreVert';


export default function ProfileDetail() {
  return (
    <div className='profileDetail'>
    <div className='userImages'>
        <img className='coverpic' src='https://images.pexels.com/photos/6434595/pexels-photo-6434595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
        <div className='profilcepicinfo'>
           <img className='profilepic' src='https://images.pexels.com/photos/18076120/pexels-photo-18076120/free-photo-of-man-in-jeans-and-a-tank-top-sitting-in-grass.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
           <span>Alok Verma</span> 
        </div>
    </div>
    <div className='profiledetailContainer'> 
        <div className='profileContainer'>
            <div className='leftprofile'>
                <FacebookOutlinedIcon />
                <TwitterIcon />
                <InstagramIcon />
                <LinkedInIcon />

            </div>
            <div className='center'>
                <div className='centerprofile'>
                    <LocationOnIcon />
                    <span>Email</span>
                    <LanguageIcon />
                    <span>alok.site</span>
                </div>
                <button>Follow</button>
            </div>
            <div className='rightprofile'>
                <EmailIcon />
                <MoreVertIcon />
            </div>
        </div>
    </div>
    </div>
  )
}
