import React, { useContext, useRef, useState } from 'react';
import UserContext from '../Context/userContext';
import axios from 'axios';

export default function Login() {
  const userContext = useContext(UserContext);
  const setUser = userContext.setUser;
  const [ loginStatus, setLoginStatus ] = useState();

  const email = useRef();
  const password = useRef();

  const loginHandler = async () => {
    const res = await axios.patch( 'https://fa-intranet.herokuapp.com/auth/login', { "username": email, "password": password} );

    if ( res === "wrong username or password"){
      setLoginStatus("wrong username or password");
    } else if( res.email ) {
      setLoginStatus("SUCCESS");
      setUser( res );
      localStorage.setItem("user", JSON.stringify( res ));
    } else {
      setLoginStatus( res );
    }
  }

  return (
    <div>
        <p class='h3 fw-bold pe-3' style={{"width": "390px"}} >Login to your app</p>
        <p class="small text-secondary">To make a workplace from scratch, please confirm your eamil</p>
        
        <form class='mt-4' style={{"width": "390px"}} onClick={loginHandler}>
            <div  class="mb-3">
              <label for="username" class="form-label small text-secondary p-0 m-0" style={{"color": "grey"}}>User Name</label>
              <input type="text" class="form-control ps-1 text-secondary small" ref={email} id="username" placeholder='Enter your user name' style={{"font-size": "14px"}}/>
            </div>
             
            <div class="mb-3">
              <label for="passwordFirst" class="form-label small text-secondary p-0 m-0" style={{"color": "grey"}}>Password</label>
              <input type="password" class="form-control ps-1 text-secondary small" ref={password} id="passwordFirst" style={{"width": "390px", "font-size": "14px"}} placeholder='Enter your password' />
            </div>

            <div class="mb-3 d-flex flex-row justify-content-between">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="disabledFieldsetCheck" />
                <label class="form-check-label" for="disabledFieldsetCheck" style={{ "font-size": "12px"}}>
                  Remind Me
                </label>
              </div>

              <div style={{ "font-size": "12px"}}>
                Forgot password?
              </div>
            </div>
      
            <button type="submit" class="btn btn-success px-4 mt-3" style={{"width": "120px"}}><small>Login</small></button>
        </form>

        { ( loginStatus==="SUCCESS") &&  
          <div class="d-flex flex-row" >
            <p class="small text-success">Login success</p>
          </div>
        }
        { ( loginStatus==="wrong username or password") &&  
          <div class="d-flex flex-row" >
            <p class="small text-success">Wrong username or password.</p>
          </div>
        }
        { ( loginStatus !== "SUCCESS" || loginStatus !== "wrong username or password" ) &&  
          <div class="d-flex flex-row" >
            <p class="small text-success">Wrong username or password.</p>
          </div>
        }

    </div>
  )
}





