import React, { useRef, useState } from 'react';
import axios from 'axios';


export default function ConfirmEmail( { companyData, setCompanyData, setSetupAppPage } ) {
  const email = useRef(); 
  const [emailCheck, setEmailCheck] = useState( );

  const clickHandler = async (e) => {
    e.preventDefault();
    const res = await axios.get( '/api/auth/checkEmail' , { "email" : email.current.value} )
    console.log( res );

    if( res === "Not available") {
      setEmailCheck( "Not available" )
      companyData.email = email.current.value;
      setCompanyData(companyData);
      setSetupAppPage(true);
      console.log(companyData);
    } else if( res === "Already available") {
      setEmailCheck( "Already available" )
    } else {
      setEmailCheck( "Something went wrong" )
    }
  }

  return (
    <div class="d-flex-column align-items-center">
        <p class='h3 fw-bold pe-3' style={{"width": "390px"}} >Make Your Life Easy with Intranet!</p>
        <p class="small text-secondary">To make a workplace from scratch, please confirm your eamil</p>
        
        <form class='mt-4' onSubmit={ clickHandler }>
            <div class="mb-3">
              <label for="inputEmail1" class="form-label small text-secondary p-0 m-0" style={{"color": "grey"}} >Email address</label>
              <input type="email" class="form-control fs-6 ps-1 text-secondary small" ref={email} id="inputEmail1" style={{"width": "390px"}} aria-describedby="emailHelp" placeholder='name@email.com' />
            </div>
            <button type="submit" class="btn btn-success px-4 mt-3" ><small>Confirm Email</small></button>
        </form>

        { ( emailCheck==="Already available") &&  
          <div class="d-flex flex-row" >
            <p class="small text-failure">Entered email is already in use.</p>
          </div>
        }
        { ( emailCheck==="Something went wrong") &&  
          <div class="d-flex flex-row" >
            <p class="small text-failure">Something went wrong. Try again later.</p>
          </div>
        }

    </div>
  )
}



 

