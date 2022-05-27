import React from 'react'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';


export default function Post( { props } ) {

  return (
    <div>
        <div class="card" style={{ "width": "18rem" }}>
            <div class="card-body">
                <div class="text-success" style={{ "border-radius": "50%" , "width": "40px", "background-color":"#7afab4"}}> 
                    {props.username[0]}
                </div>
                <>
                <div>
                    <h5 class="card-title">{props.subject}</h5>
                    <EditOutlinedIcon />
                    <EmailOutlinedIcon />
                    <p>{props.updatedAt}</p>
                </div>
                <p class="card-text">{props.description}</p>
                </>
            </div>
        </div>
    </div>
  )
}





