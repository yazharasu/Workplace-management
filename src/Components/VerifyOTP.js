import axios from 'axios';
import React, { useState } from 'react';

export default function VerifyOTP() {

  const [ otp , setOtp ] = useState();
  const [ verifyStatus, setVerifyStatus ] = useState();
  let pass = [];

  function OTPInput() {
    const inputs = document.querySelectorAll('#otpVerify > *[id]');
    for (let i = 0; i < inputs.length; i++) { 
      inputs[i].addEventListener('keydown', 
      function(event) { 
        if (event.key==="Backspace" ) { 
          inputs[i].value='' ; 
          if (i !== 0) inputs[i - 1].focus(); 
        } else { 
          if (i===inputs.length - 1 && inputs[i].value !=='' ) { 
            return true; 
          } else if (event.keyCode> 47 && event.keyCode < 58) { 
            inputs[i].value=event.key; 
            if (i !==inputs.length - 1) inputs[i + 1].focus(); 
              event.preventDefault(); 
          } else if (event.keyCode> 64 && event.keyCode < 91) { 
            inputs[i].value=String.fromCharCode(event.keyCode); 
            if (i !==inputs.length - 1) inputs[i + 1].focus(); event.preventDefault(); 
          } 
        } 
      });
    }
    if (inputs[5].value !== "" ){
      for(let j = 0; j < inputs.length; j++) {
        pass.push( inputs[j].value )
      }
      pass = pass.join('')
      setOtp(pass)
    }

    const verifyOtpFn = async () => {
      await axios.put( 'https://fa-intranet.herokuapp.com/auth/verifyOTP' , { "email":"yazh.bis@gmail.com", "otp": otp } )
      .then( (res) => {
        console.log(res.status)
        setVerifyStatus(res.status)
    } ) }
    verifyOtpFn()
  } 
 
  const resendOtpFn = async () => {
    await axios.put( 'https://fa-intranet.herokuapp.com/auth/resenOtp' , { "email" : "yazh.bis@gmail.com" } )
    .then( (res) => {
      console.log(res.status)
      setVerifyStatus(res.status)
  } ) }


  return (
    <div>
      <p class='h3 fw-bold pe-3' style={{"width": "390px"}} >We've sent you a mail!</p>
      <p class="small text-secondary">To make a workplace from scratch, please confirm your eamil</p>

      <form class='mt-4'>
        <div class="mb-3">
          <label for="otpVerify" class="form-label small text-secondary p-0 m-0" style={{"color": "grey"}} >Enter your verification code</label>
          <div class="d-flex flex-row justify-content-between mt-1 inputs" id="otpVerify" style={{"width": "390px"}} >
            <input type="text" class="form-control m-2 ms-0 text-center" autofocus="" id="first" maxlength="1" />
            <input type="text" class="form-control m-2 text-center" autofocus="" id="second" maxlength="1" />
            <input type="text" class="form-control m-2 text-center" autofocus="" id="third" maxlength="1" />
            <input type="text" class="form-control m-2 text-center" autofocus="" id="fourth" maxlength="1" />
            <input type="text" class="form-control m-2 text-center" autofocus="" id="fifth" maxlength="1" />
            <input type="text" class="form-control m-2 text-center" autofocus="" id="sixth" maxlength="1" onChange={ () => OTPInput() } />
          </div>
        </div>
      </form>
      { ( verifyStatus==="SUCCESS") &&  
        <div class="d-flex flex-row" >
          <p class="small text-success">OTP Verified. Login to continue.</p>
          <link class="fw-bold" >Resend OTP</link>
        </div>
      }
      { (verifyStatus==="INVALID") &&  
        <div class="d-flex flex-row" >
          <p class="small text-danger">Enter correct password.</p>
          <link onClick={ resendOtpFn } class="fw-bold" >Resend OTP</link>
        </div>
      }
      { ( verifyStatus==="FAILED") &&  
        <div class="d-flex flex-row" >
          <p class="small text-danger">Someting went wrong.</p>
          <link onClick={ resendOtpFn } class="fw-bold" >Resend OTP</link>
        </div>
      }
    </div>
  )
}