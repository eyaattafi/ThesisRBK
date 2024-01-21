'use client'
import React, { useState } from 'react'
import axios from 'axios';

const Satisfaction = () => {

 const [show,setShow]= useState<boolean>(false)
 const [result,setResult]=useState<string>("")
 const [email,setEmail] = useState<string>("")
 const [body,setBody] = useState<string>("")
 const storedUserId = localStorage.getItem('userId');
  

    // Show the survey //
    setInterval(fetchSurvey, 100000);
    function fetchSurvey() {
       setShow(true)
    
    }

    const answer = {
      satisfactionDegree: result,
      userIduser:  storedUserId 
    }
    const message = {
      inBoxObject : "Survey note",
      inBoxBody : body,
      inBoxDate : new Date(),
      adminIdadmin : 2,
      userIduser : storedUserId,
     
    }

    // add satisfaction to database //
    const addSatisfaction =  (sat : any) => {
      axios.post('http://localhost:3000/api/addSatisfaction',sat)
      .then(()=>{})
      .catch((err)=>{console.log(err)})
     }
 

// Sent inbox to the admin // 
const addInbox =  (message : any) => {
  if(email && body ){
    axios.post('http://localhost:3000/api/addinbox',message)
    .then(()=>{})
    .catch((err)=>{console.log(err)})
  }
  else {
    console.log("Empty inputs")
  }

 }




  return (
    <div>{show && <div className='fixed top-0 left-0 right-0 bottom-0 text-center flex items-center justify-center bg-transparent border-black border- rounded shadow-2xl'>
    <div className="bg-white shadow-lg w-[500px] h-[580px]">
        <h1 className='font-bold text-2xl mt-12 mb-2 justify-center'>Overall Satisfaction Survey</h1>

        <div className='flex flex-r gap-6 mt-10 mb-10 ml-10'>
        <div>
  <input className='w-4 h-4'  type="checkbox"  value="Very Satisfied" onClick={()=>{setResult("Very satisfied")}}/>
  <label className='ml-3' >Very Satisfied </label>
</div>
<div >
  <input className='w-4 h-4' type="checkbox"  value="Satisfied" onClick={()=>{setResult("Satisfied")}}/>
  <label  className='ml-3'>Satisfied </label>
</div>
<div >
  <input className='w-4 h-4' type="checkbox" value="Dissatisfied" onClick={()=>{setResult("dissatified")}}/>
  <label  className='ml-3'> Dissatisfied</label>
</div>
</div>
<div className='grid grid-cols-1 ml-10'>
<h1 className='font-bold text-lg mt-2 mb-1 justify-center mr-8'> Send Recommendation, Note, Claim </h1>
<input className=' h-12 mt-10 border-slate-500 border-2 w-96 mb-4 ml-5' placeholder='Enter your email' onChange={(ev)=>{setEmail(ev.target.value)}}/>
<input className='w-96 h-24 border-slate-500 border-2 ml-5 mt-5' placeholder='Write message' onChange={(ev)=>{setBody(ev.target.value)}}/>
<button className='w-40 h-10 rounded bg-zinc-100 mt-10 ml-32  hover:bg-zinc-200' onClick={()=>{addSatisfaction(answer);addInbox(message)}}> Apply </button>
<button className='text-start' onClick={()=>{setShow(false)}}> Skip</button>
</div>
</div>
    </div>}</div>
    
  )
}

export default Satisfaction
