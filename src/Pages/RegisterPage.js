import React, { useState } from 'react'
import ConfirmEmail from '../Components/ConfirmEmail';
import TopNavFront from '../Components/TopNavFront';
import first_page from '../Assets/first_page.JPG';
import SetupCompany from '../Components/SetupCompany';
import SetPassword from '../Components/SetPassword';
import VerifyOTP from '../Components/VerifyOTP';


export default function RegisterPage( { verifyPage, setVerifyPage } ) {
  const [ setupAppPage, setSetupAppPage ] = useState(false);
  const [ passwordPage, setPasswordPage ] = useState(false);
  const [ companyData, setCompanyData ] = useState({ email: "" });
  const email= companyData.email;


  return (
    <div class="container-fluid p-0 m-0">
      <TopNavFront />
      <div class="d-flex flex-row justify-content-around align-items-center float fixed-bottom">
        <img src={first_page} />

        {email==='' && <ConfirmEmail companyData={companyData} setCompanyData={setCompanyData} setSetupAppPage={setSetupAppPage} /> }

        {setupAppPage===true && <SetupCompany companyData={companyData} setCompanyData={setCompanyData} setSetupAppPage={setSetupAppPage} setPasswordPage={setPasswordPage} /> }

        {passwordPage===true && <SetPassword companyData={companyData} setCompanyData={setCompanyData} setVerifyPage={setVerifyPage} setPasswordPage={setPasswordPage}/> }
        
        {verifyPage===true && <VerifyOTP  /> }

      </div>
    </div>
  )
}





