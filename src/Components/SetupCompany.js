import React, {useRef} from 'react';


export default function SetupCompany( {companyData, setCompanyData, setSetupAppPage, setPasswordPage} ) {
    const companyName = useRef(); 
    const location = useRef(); 
    const noEmp = useRef(); 
    const domainName = useRef(); 

    const submitHandler = (e) => {
        e.preventDefault(); 
        companyData.companyName = companyName.current.value;
        companyData.location = companyName.current.value;
        companyData.noEmp = companyName.current.value;
        companyData.domainName = companyName.current.value;

        setCompanyData(companyData);
        console.log(companyData);
        setSetupAppPage(false);
        setPasswordPage(true);
    }

  return (
    <div>
        <p class='h3 fw-bold pe-3' style={{"width": "390px"}} >Setup Your Application</p>
        <p class="small text-secondary">To make a workplace from scratch, please confirm your eamil</p>
        
        <form class='mt-4' onSubmit={ submitHandler }>
            <div class="mb-3">
                <label for="companyName" class="form-label small text-secondary p-0 m-0" style={{"color": "grey"}}>Company Name</label>
                <input type="text" class="form-control ps-1 text-secondary small" id="companyName" ref={companyName} style={{"width": "390px", "font-size": "14px"}} placeholder='Enter your company name' />
            </div>
            <div class="mb-3 d-flex flex-row justify-content-between" style={{"width": "390px"}}>
                <div>
                <label for="location" class="form-label small text-secondary p-0 m-0" style={{"color": "grey"}}>Location</label>
                <input type="text" class="form-control ps-1 text-secondary small" id="location" ref={location} placeholder='Coimbatore' style={{"font-size": "14px"}}/>
                </div>  
                <div>
                <label for="noEmp" class="form-label small text-secondary p-0 m-0" style={{"color": "grey"}}>No. of Employees</label>
                <input type="text" class="form-control ps-1 text-secondary small" id="noEmp" ref={noEmp} style={{"width": "150px", "font-size": "14px"}} placeholder='100' />
                </div>
            </div>
            <div class="mb-3">                
                <div class="col-auto" style={{"width": "390px"}}>
                    <label class="sr-only small text-secondary p-0 m-0" for="domainName" style={{"color": "grey"}}>Customize your domanin name</label>
                    <div class="input-group mb-2" >
                        <input type="text" class="form-control small text-secondary p-0 m-0" id="domainName" ref={domainName} placeholder="Username" style={{"font-size": "14px"}} />
                        <div class="input-group-prepend"> <div class="input-group-text">.intranet.com</div> </div>
                    </div>
                </div>
            </div>
            <button type="submit" class="btn btn-success px-4 mt-3" style={{"width": "120px"}}><small>Next</small></button>
        </form>
    </div>
  )
}





