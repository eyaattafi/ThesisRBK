'use client'
import React,{useState} from 'react';


const CreateMessage = () => {

  const [email,setEmail]= useState<string>("")
  const [obj,setObj]=useState<string>("")
  const [body,setBody]= useState<string>("")
  const [inBoxStatus,setInboxStatus]=useState<string>("Sender")

  const newInbox = {
    inBoxObject : obj,
    inBoxBody : body,
    inBoxDate : new Date(),
    inBoxStatus : inBoxStatus,
    admin_idadmin : idAdmin,
  }
const addInbox = () => {
    fetch('http://localhost:3000/api/addinbox', {
        method: 'POST',
        body: JSON.stringify(newInbox),
      })
}

  return (
    <div> 
    <div className='mt-6 mb-6 font-bold text-xl'> New Message </div>
 <div className='rounded ml-16 w-[1150px] h-[800px] mt-14'> 

 <input className='rounded shadow-lg w-[1150px] h-16 pt-2 pl-6  bg-slate-100 mb-2' placeholder='To : '/>
 <input className='rounded shadow-lg w-[1150px] h-16 pt-2 pl-6  bg-slate-100 mb-2' placeholder='Object : '/>
 <input className='rounded shadow-lg w-[1150px]  h-[200px] pl-6  bg-slate-100 mb-2' placeholder='Write your message : '/>

   <button className="bg-orange-950 text-white px-4 py-2 rounded hover:bg-red-500 mt-12 mb-12 ml-[550px]"> SEND   </button>
 </div></div>
  )
}

export default CreateMessage
