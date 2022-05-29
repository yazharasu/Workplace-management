import React, { useState, useRef } from 'react'
import axios from 'axios';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import './AnnouncementWin.css';


export default function AnnouncementWin( {setAnWin} ) {
    const subject = useRef();
    const description = useRef();
    const date = useRef(null);
    const time = useRef(null);
    const location = useRef(null);
    const expDate = useRef();
    const nofityTo = useRef();
    const [annoucDetails, setAnnoucDetails] = useState({ });
    const [togglestatus, setToggleStatus] = useState(1);
    const [radioOpt, _] = useState();

    const toggle = ( stat ) => { 
        setToggleStatus(stat);
    };

    const radioEventHandler = (e) => {
        setRadioOpt(e.target.value)
        if (radioOpt == 1) {
            annoucDetails.notifyTo = toAll;
        } else if (radioOpt == 2 || radioOpt == 3 ) {
            annoucDetails.notifyTo = nofityTo.current.value ;
        }
    }

    const submitHandler = async (e) => {
        e.preventDefault();

        if (togglestatus===1) {
            annoucDetails.subject = subject.current.value;
            annoucDetails.description = description.current.value;

            await axios.post( 'https://fa-intranet.herokuapp.com/announcements/announcement', annoucDetails)
                .then( (res) => {console.log(res.status); setAnnoucDetails({}) } )

        } else if (togglestatus===2) {
            annoucDetails.subject = subject.current.value;
            annoucDetails.description = description.current.value;
            annoucDetails.date = date.current.value;
            annoucDetails.time = time.current.value;
            annoucDetails.location = location.current.value;
            
            await axios.post( 'https://fa-intranet.herokuapp.com/announcements/event', annoucDetails)
                .then( (res) => {console.log(res.status); setAnnoucDetails({}) } )

        }else if (togglestatus===3) {
            annoucDetails.subject = subject.current.value;
            annoucDetails.description = description.current.value;
            annoucDetails.expDate = expDate.current.value;

            await axios.post( 'https://fa-intranet.herokuapp.com/announcements/reminder', annoucDetails)
                .then( (res) => {console.log(res.status); setAnnoucDetails({}) } )
        }
    }

  
  return (
    <div class="d-flex-column align-items-center py-3" style={{"width": "390px" , "height": "auto", "background-color": "white", }} >

        <div class='h6 fw-bold pe-3 ps-3 d-flex flex-row justify-content-between' style={{"width": "390px"}}>
            <p >Add new announcement</p>
            <CloseOutlinedIcon id="closeIcon" onClick={ () => setAnWin(false) } />
        </div>
        
        <form class='mt-2 mx-3' style={{"width": "350px", }} >
            <div class="mb-4" >
              <label for="subject" class="form-label small text-secondary p-0 m-0" style={{"color": "grey" }} >Subject</label>
              <input type="text" class="form-control fs-6 ps-1 text-secondary small" ref={subject} id="subject" />
            </div>

            <div class="mb-3 nav  d-flex flex-row align-items-center justify-content-left" onClick={ (e) => e.preventDefault()} >
                <button type="tab" class= {togglestatus === 1 ? 'btn btn-success clicked-name mx-2 my-0 px-1 py-0':'btn btn-light mx-2 my-0 px-1 py-0'} onClick={ () => { toggle(1); } } ><small>Announcement</small></button>
                <button type="tab" class= {togglestatus === 2 ? 'btn btn-success clicked-name mx-2 my-0 px-1 py-0':'btn btn-light mx-2 my-0 px-1 py-0'} onClick={ () => { toggle(2);} } ><small>Event</small></button>
                <button type="tab" class= {togglestatus === 3 ? 'btn btn-success clicked-name mx-2 my-0 px-1 py-0':'btn btn-light mx-2 my-0 px-1 py-0'} onClick={ () => { toggle(3);} } ><small>Reminder</small></button>
            </div>

            { (togglestatus===2) &&  
            <div class="container-fluid p-0 m-0">
                <div class="d-flex flex-row align-items-center justify-content-between ">
                    <div class="mb-3">
                        <label for="eventDate" class="form-label small text-secondary p-0 m-0" style={{"color": "grey"}}>Date</label>
                        <input type="date" class="form-control ps-1 text-secondary small" id="eventDate" ref={date} style={{"width": "130px", "font-size": "14px"}} placeholder='Enter your company name' />
                    </div>  
            
                    <div class="mb-3">
                        <label for="eventTime" class="form-label small text-secondary p-0 m-0" style={{"color": "grey"}}>Time</label>
                        <input type="time" class="form-control ps-1 text-secondary small" id="eventTime" ref={time} style={{"width": "130px", "font-size": "14px"}} placeholder='Enter your company name' />
                    </div>
                </div>

                <div class="mb-3">
                <label for="desEvent" class="form-label small text-secondary p-0 m-0" style={{"color": "grey"}}>Location</label>
                <input type="text-box" class="form-control ps-1 text-secondary small" id="desEvent" ref={location} style={{"width": "350px","font-size": "14px"}} placeholder='Enter your company name' />
                </div>
            </div>
            }

            { (togglestatus===3) &&  
            <div class="container-fluid p-0 m-0">
               <div class="mb-3">
                    <label for="expDate" class="form-label small text-secondary p-0 m-0" style={{"color": "grey"}}>Expires On</label>
                    <input type="date" class="form-control ps-1 text-secondary small" id="expDate" ref={expDate} style={{"width": "350px", "font-size": "14px"}} placeholder='Enter your company name' />
                </div>
            </div>
            }

            <div class="container-fluid p-0 m-0">
                <div style={{"width": "390px"}} >
                    <label for="anncDetails" class="form-label small text-secondary p-0 m-0" style={{"color": "grey"}}>Description</label>
                    <textarea class="form-control ps-1 text-secondary small" rows="2" id="anncDetails" ref={description} style={{"width": "350px", "font-size": "14px"}} placeholder='Enter your company name' />
                </div>
            </div>
            
            <label class="form-check-label mt-3" for="formTo" style={{"font-size": "14px"}}>Notify To</label>
            <div class="form-check" onClick={ radioEventHandler }>
                <input class="form-check-input" type="radio" value="1" id="toAll" name="radioOpt" />
                <label class="form-check-label" for="toAll" style={{"font-size": "14px"}}>
                    To All Members
                </label>
            </div>
            <div class="form-check" onClick={ radioEventHandler }>
                <input class="form-check-input" type="radio" value="2" id="toPersons" name="radioOpt" />
                <label class="form-check-label" for="toPersons" style={{"font-size": "14px"}}>
                    Choose Persons
                </label>
            </div>
            <div class="form-check" onClick={ radioEventHandler }>
                <input class="form-check-input" type="radio" value="3" id="toDept" name="radioOpt"/>
                <label class="form-check-label" for="toDept" style={{"font-size": "14px"}} >
                    Choose Department/Role
                </label>
            </div>
            
            { (radioOpt>1) &&
                <div class="container-fluid p-0 m-0">
                    <div style={{"width": "390px"}} >
                        <textarea class="form-control ps-1 text-secondary small" rows="2" id="anncDetails" ref={nofityTo} style={{"width": "350px", "font-size": "14px"}} placeholder="Enter email id's separated by camma" />
                    </div>
                </div>
            }
 
            <button class="btn px-3 mt-3 me-3 py-0 btn-outline-secondary " ><small>Discard</small></button>
            <button type="submit" onClick={ submitHandler} class="btn btn-success px-4 py-0 mt-3 ms-3" ><small>Send</small></button>
        </form>
    </div>
    )
}