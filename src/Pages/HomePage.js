import React, { useState, useEffect, useContext } from 'react';
import UserContext from '../Context/userContext';
import axios from 'axios';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AnnouncementWin from '../Components/AnnouncementWin';
import Post from '../Components/Post';
import OutsideClickHandler from 'react-outside-click-handler';
import "./HomePage.css";


export default function HomePage() {
  const [ anWin, setAnWin ] = useState(false);
  const [ allAnnuc, setAllAnnuc ] = useState();
  const userContext = useContext(UserContext);
  const { user,  setUser } = userContext;

  useEffect( () => {
    const getAllAnnuc = async () => {
      const data = { "email": "yazh.bis@gmail.com" };
      const allAnnuc = await axios.get( 'announcements/getAnnouncements', data );
      console.log(allAnnuc);
      setAllAnnuc( allAnnuc );
    }
    getAllAnnuc()
  }, [])

  const logoutHandler = async () => {
    await axios.patch( './auth/logout', { "email": user.email } );
    setUser( null );
    localStorage.removeItem("user");
  }

  return (
    <div class="container-fluid p-0 m-0 d-flex flex-row ">

      <div className='anncElementContainer' style={{ visibility: anWin ? "visible" : "hidden", opacity: anWin ? "1" : "0" }}>
      <OutsideClickHandler onOutsideClick= { () => setAnWin(false) } > 
        <AnnouncementWin className='anncElement' setAnWin={setAnWin} />
      </OutsideClickHandler>
      </div>

      <div class="sidebar p-2 " style={{"width": "220px", "height":"100vh", "background-color": "rgba(0, 77, 77,1)"}} >
        <h5 class="mb-4 mt-3 text-center" style={{"color": "rgb(0, 204, 102)"}} >SA-INTRANET</h5>
        <div class="text-white d-flex align-items-center my-3 p-2" id='menu-item1'> 
          <CampaignOutlinedIcon />
          <p class="ms-2 mb-0">Announcments</p>
        </div>
        <div  class="text-white d-flex align-items-center my-3 p-2" id='menu-item1'> 
          <LogoutOutlinedIcon />
          <p class="ms-2 mb-0">Dashboard</p>
        </div>
        <div class="text-white d-flex align-items-center my-3 p-2" id='menu-item1' onClick={logoutHandler} > 
          <HomeOutlinedIcon />
          <p class="ms-2 mb-0">Logout</p>
        </div>
      </div>

      <div class="min-vh-100" style={{"width": "100vw", "background-color": "rgb(240, 240, 245)"}}>
        <div style={{ "height":"40px", "background-color": "white"}}>
          <p class="text-left py-2 mx-0 ms-3 fs-6">Announcements</p>
        </div>
        
        <nav class="navbar navbar-light">
          <div class="container-fluid d-flex align-items-right justify-content-end">
            <form class="d-flex"> 
              <input class="form-control my-0 py-0 px-2 mx-2 fs-6 " type="search" placeholder="Search" aria-label="Search" />
            </form>
            <button onClick={ () => setAnWin(true) } type="button" class="btn btn-success px-2 py-0 mx-2" data-toggle="modal" data-target="#announcementWindow1"> <small>+Add Announcement</small></button>
          </div>
        </nav>
      </div>
      { (allAnnuc.length>0) && allAnnuc.map( (Annc) => { return <Post Annc={Annc} /> } ) }

      { (!allAnnuc) && 
        <div> No announcements are available </div>
      }
    </div>
  )
}





