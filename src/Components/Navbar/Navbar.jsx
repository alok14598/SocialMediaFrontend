
import "./navbar.scss"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import WindowOutlinedIcon from '@mui/icons-material/WindowOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className='navbar'>
        <div className='navbarContainer'>
            <div className='leftnavbar'>
                <div className='logo'> Social Media</div>
                <HomeOutlinedIcon />
                <DarkModeOutlinedIcon />
                <WindowOutlinedIcon />
                <div className='searchItem'>
                    <SearchOutlinedIcon />
                    <input type="text" placeholder="Search..."/>
                </div>
            </div>
            <div className='rightnavbar'>
            <PersonOutlineOutlinedIcon />
            <EmailOutlinedIcon />
            <NotificationsOutlinedIcon />
            <div className='userInfo'>
          {/*  <img src="https://images.pexels.com/photos/18076120/pexels-photo-18076120/free-photo-of-man-in-jeans-and-a-tank-top-sitting-in-grass.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                <span>Alok Verma</span>
*/}
<div style={{display:"flex",gap:"10px"}}>

  <Link to="./login"> <button>Login</button> </Link>
 
  <Link to="./register"><button>Register</button></Link>
</div>
            </div>

            </div>
        </div>
      
    </div>
  )
}
