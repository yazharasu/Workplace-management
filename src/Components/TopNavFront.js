import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import { Link } from "react-router-dom";


export default function TopNavFront() {
  return (
    <nav class="navbar navbar-expand-lg shadow-sm mb-2 bg-body p-0">
    <div class="container-fluid ">
        <Link to="/" class="fw-bold nav-link text-success fs-5" href="#">INTRANET</Link>
        
        <div class="d-flex flex-row align-items-center " style={{"color": "grey"}}>
            <Link to="/login" class="navbar-login px-5 text-success fw-bold nav-link" >Login</Link>
            <EmailIcon style={{"width": "20px"}}/>
            <p class="px-2 py-0 m-0 " style={{"font-size": "14px"}}>support@squashapps.com</p>
        </div>
    </div>
    </nav>
    )
}





