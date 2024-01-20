'use client'
import React, { useState,useEffect } from 'react'
import ConfirmBlock from './ConfirmBlock';
import axios from 'axios';
import Link from 'next/link'

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
const [show,setShow] = useState<boolean>(false)
const [refresh,setRefresh]= useState<boolean>(false)
const [id,setId]=useState<number>(0)


    const fetchClients = async () => {
        try {
          const res = await fetch(`http://localhost:3000/api/nonblocked`);
          const data = await res.json();
          console.log(data);
          
          setClients(data);
        } catch (err) {
          console.error(err);
        }
      };


      useEffect(()=>{
        fetchClients()
      },[refresh])

      console.log("clients", clients)

// Block a client //


const  blockClient = (iduser : number) => {
  axios
    .put(`http://localhost:3000/api/updateUser/${iduser}`,{userBlocked: true})
    .then(() => {
      setRefresh(!refresh);
    })
    .catch((err) => {
      console.error(err);
    });
};


// Cancel deleting the claim//
const handleCancel = () => {
  setRefresh(!refresh)
  setShow(!show)
}
// Confirm deleting the claim //
const handleConfirm = () => {
  blockClient(id)
   setShow(!show)
}



  return (
    <div>
          <div className='flex flex-wrap gap-20 ml-20 mt-9 mb-9' >
            {clients.map((el,i)=>{ 
                return(
        <div className="w-80 border shadow-lg rounded bg-white p-2">
          <img className="mt-8 w-[150px] h-[150px] rounded-[100px] ml-20" src={el.userImage} alt="" />
          <h1 className="mt-8 text-xl font-bold text-center">{el.userName}</h1>
        <p className="mt-8 border rounded p-2 pl-6 w-full justify-center shadow-lg "><span className='font-bold'>Email:</span> {el.userEmail}</p>
        <p className="mt-4 border rounded p-2 pl-6 w-full justify-center shadow-lg "><span className='font-bold'>Phone Number:</span> +216 55247751</p>
        <div className='mt-6 ml-12 mb-6 '>
        <button className=' mr-5 bg-white shadow-lg px-4 py-2 rounded hover:bg-green-500' ><Link href={`/Admin/MyClients/ContactUser/${el.iduser}/${el.userEmail}`}>Notification</Link> </button>
        <button className='bg-white shadow-lg px-4 py-2 rounded hover:bg-red-500' onClick={()=>{setShow(!show); setId(el.iduser)}}> Block </button>
        <div> {show && <ConfirmBlock  onConfirm={handleConfirm} onCancel={handleCancel}/>}</div>
      </div></div>
   )})}
          </div>
    </div>
  )
}

export default MyClients;
