import React from 'react';
import "./navbar.css";

import menu_icon from '../../assets/menu.png';
import logo from '../../assets/logo.png';
import krlaange2 from '../../assets/newlogo.png';
import search_icon from '../../assets/search.png';
import upload_icon from '../../assets/upload.png';
import profile_icon from '../../assets/more.png';
import more_icon from '../../assets/jack.png';
import notification_icon from '../../assets/notification.png';
import { Link } from 'react-router-dom';
const Navbar = ({setSidebar}) => {
  return (
    <nav className='flex-div'>
      <div className='nav-left flex-div'>
        <img className='menu_icon' src={menu_icon} alt="menu"  onClick={()=>setSidebar(prev=>!prev)}/>
        <Link to = '/'><img className='logo' src={krlaange2} alt="VidTube logo" /></Link>
        
      </div>
      
      <div className='nav-middle flex-div'>
        <div className='search-box flex-div'>
          <input type='text' placeholder='Search' />
          <img src={search_icon} alt="search" />
        </div>
      </div>

      <div className='nav-right flex-div'>
        <img src={upload_icon} alt="upload" />
        <img src={more_icon} alt="more options" />
        <img src={notification_icon} alt="notifications" />
        <img src={profile_icon} className='user_icon' alt="profile" />
      </div>
    </nav>
  );
}

export default Navbar;