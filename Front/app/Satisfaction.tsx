'use client'
import React, { useState } from 'react'

const Satisfaction = () => {

 const [show,setShow]= useState<boolean>(false)
    setInterval(fetchSurvey, 900000);

    function fetchSurvey() {
       setShow(true)
    }


  return (
    <div>{show && <div className='fixed top-0 left-0 right-0 bottom-0 text-center flex items-center justify-center bg-transparent border-black border- rounded shadow-2xl'>
    <div className="bg-white shadow-lg w-[500px] h-[580px]">
        <h1 className='font-bold text-2xl mt-12 mb-2 justify-center'>Overall Satisfaction Survey</h1>

        <div className='flex flex-r gap-6 mt-10 mb-10 ml-10'>
        <div>
  <input className='w-4 h-4'  type="checkbox"  value="Very Satisfied"/>
  <label className='ml-3' >Very Satisfied </label>
</div>
<div >
  <input className='w-4 h-4' type="checkbox"  value="Satisfied"/>
  <label  className='ml-3'>Satisfied </label>
</div>
<div >
  <input className='w-4 h-4' type="checkbox" value="Dissatisfied"/>
  <label  className='ml-3'> Dissatisfied</label>
</div>
</div>
<div className='grid grid-cols-1 ml-10'>
<h1 className='font-bold text-2xl mt-2 mb-2 justify-center'> You Can Send a Note too </h1>
<input className=' h-12 mt-10 border-slate-500 border-2 w-96 mb-4 ml-5' placeholder='Enter your email'/>
<input className='w-96 h-24 border-slate-500 border-2 ml-5 mt-5' placeholder='Write message'/>
<button className='w-40 h-10 rounded bg-zinc-100 mt-10 ml-32  hover:bg-zinc-200'> Apply </button>
<button className='text-start' onClick={()=>{setShow(false)}}> Skip</button>
</div>
</div>
    </div>}</div>
    
  )
}

export default Satisfaction
