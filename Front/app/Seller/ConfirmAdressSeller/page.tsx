import React from "react"

import './adress.css'
const AddRentSeller = () =>{
    return (
        <div className="all">
        

        <div className="q">Confirm your Adress </div>
        <div className="q1">Your adress is only shared with guestes once they've booked </div>
       
        <div className="input-wrapper">
        <input type="text" placeholder="Type here..." name="text"></input><br/>
        </div>
        <div className="input-wrapper1">
        <input type="text" placeholder="Type here..." name="text"></input>
        </div>
        <div className="input-wrapper2">
        <input type="text" placeholder="Type here..." name="text"></input>
        </div>
        <div className="button" ><button>Next</button></div>
        </div>
        
      
    )
}

export default AddRentSeller ;