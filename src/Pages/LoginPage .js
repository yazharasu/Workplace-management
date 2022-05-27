import React from 'react'
import TopNavFront from '../Components/TopNavFront';
import first_page from '../Assets/first_page.JPG';
import Login from '../Components/Login';


export default function LoginPage() {

  return (
    <div class="container-fluid p-0 m-0">
      <TopNavFront />
      <div class="d-flex flex-row justify-content-around align-items-center float fixed-bottom">
        <img src={first_page} alt="" />
        <Login />
      </div>
    </div>
  )
}





