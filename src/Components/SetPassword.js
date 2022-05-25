import React, {useRef} from 'react'
import axios from "axios";


export default function SetPassword( {companyData, setCompanyData, setVerifyPage, setPasswordPage} ) {
  const firstName = useRef(); 
  const lastName = useRef(); 
  const password = useRef(); 

  const submitHandler = (e) => {
    e.preventDefault();
    companyData.firstName = firstName.current.value;
    companyData.lastName = lastName.current.value;
    companyData.password = password.current.value;
    companyData.isAdmin = true
    setCompanyData(companyData)

    const registerCompany =  async () => {
      await axios.post( 'auth/register', companyData )
      .then( (res) => console.log(res))
    }
    registerCompany()

    setPasswordPage(false)
    setVerifyPage(true) 
  }

  return (
    <div>
      <p class='h3 fw-bold pe-3' style={{"width": "390px"}} >Create Personal Password</p>
      <p class="small text-secondary">To make a workplace from scratch, please confirm your eamil</p>
      
      <form class='mt-4' onSubmit={ submitHandler }>
        <div class="mb-3 d-flex flex-row justify-content-between" style={{"width": "390px"}}>
            <div>
            <label for="firstName" class="form-label small text-secondary p-0 m-0" style={{"color": "grey"}}>First Name</label>
            <input type="text" class="form-control ps-1 text-secondary small text-capitalize" id="firstName" ref={firstName} placeholder='John' style={{"font-size": "14px"}}/>
            </div>
            <div>
            <label for="lastName" class="form-label small text-secondary p-0 m-0" style={{"color": "grey"}}>Last Name</label>
            <input type="text" class="form-control ps-1 text-secondary small text-capitalize" id="lastName" ref={lastName}  style={{ "font-size": "14px"}} placeholder='Smith' />
            </div> 
        </div>
        <div class="mb-3">
            <label for="passwordFirst" class="form-label small text-secondary p-0 m-0" style={{"color": "grey"}}>Password</label>
            <input type="password" class="form-control ps-1 text-secondary small" id="passwordFirst" ref={password} style={{"width": "390px", "font-size": "14px"}} placeholder='Enter your password' />
        </div>

        <button type="submit" class="btn btn-success px-4 mt-3" style={{"width": "120px"}}><small>Complete</small></button>
      </form>
    </div>
  )
}





