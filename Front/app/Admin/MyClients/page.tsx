'use client'
import React, { useState,useEffect } from 'react'


interface User {
    iduser: number,
    userName: string,
    userEmail: string,
    userPassword: string,
    userConfirmPass: string,
    userImage: string,
    userBlocked: boolean
  }
  



const MyClients = () => {

const [clients,setClients]= useState<User[]>([])


    const fetchClients = async () => {
        try {
          const res = await fetch(`http://localhost:3000/api/allUsers`);
          const data = await res.json();
          console.log(data);
          
          setClients(data);
        } catch (err) {
          console.error(err);
        }
      };


      useEffect(()=>{
        fetchClients()
      },[])

      console.log("clients", clients)


  return (
    <div>
          <div className='flex flex-wrap gap-20 ml-20 mt-9 mb-9' >
            {clients.map((el,i)=>{ 
                return(
        <div className="w-80 border shadow-lg rounded bg-white p-2">
          <img className="mt-8 w-[150px] h-[150px] rounded-[100px] ml-20" src="https://i.pinimg.com/564x/aa/06/d7/aa06d77cd048b867f5d0b40362e62a76.jpg" alt="" />
          <h1 className="mt-8 text-xl font-bold text-center">{el.userName}</h1>
        <p className="mt-8 border rounded p-2 pl-6 w-full justify-center shadow-lg "><span className='font-bold'>Email:</span> {el.userEmail}</p>
        <p className="mt-4 border rounded p-2 pl-6 w-full justify-center shadow-lg "><span className='font-bold'>Phone Number:</span> +216 55247751</p>
        <div className='mt-6 ml-12 mb-6 '>
        <button className=' mr-5 bg-white shadow-lg px-4 py-2 rounded hover:bg-green-500'> Contact</button>
        <button className='bg-white shadow-lg px-4 py-2 rounded hover:bg-red-500'> Block </button>
      </div></div>
   )})}
          </div>
    </div>
  )
}

export default MyClients;
