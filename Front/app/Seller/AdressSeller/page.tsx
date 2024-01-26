import React from "react"
import PlaceIcon from '@mui/icons-material/Place';
import './adress.css'
import Satisfaction from "../Satisfaction";

const AddRentSeller = () =>{
    return (
       
<div>
        <div className="q">Where is your accomondation located ?</div>
        <div className="q1">Your adress is only shared with guestes once they've booked </div>
        <div className="q2"> <PlaceIcon/> 
        <input placeholder="Type your adress"></input></div>
        <div className="button" ><button>Next</button></div>
        <Satisfaction/>
        </div>


      
    )
}

export default AddRentSeller ;