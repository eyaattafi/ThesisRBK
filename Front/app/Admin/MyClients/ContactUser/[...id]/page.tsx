'use client'
import React,{useState,useEffect} from 'react';
import axios from 'axios'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface Notification {
  notificationBody : string ,
  notificationSeen : boolean ,
  userIduser : number
}

const ContactUser = () => {
  const router = usePathname()
  const [email,setEmail]= useState<string>("")
 const [notifBody,setNotifBody]=useState<string>("")




// Get idUser from the path router //
const getIdUserFromUrl = (url : string) => {
  const parts = url.split("/")
  const id = parts[parts.length-2]
  if(Number.isInteger(parseInt(id))){
    return parseInt(id)
  }else{
    return null
  }}

// Get emailUser from the path router //
const getEmailFromUrl = (url : string) => {
  const parts = url.split("/")
  const usermail = parts[parts.length-1]
  if(usermail){
    return usermail
  }else{
    return null
  }}

const idOfUser : number | null = getIdUserFromUrl(router)
const emailOfUser : string| null = getEmailFromUrl(router)



  const newNot : Notification = {
    notificationBody : notifBody ,
    notificationSeen : false ,
    userIduser : idOfUser 
  }

  console.log("Notif", newNot)

  
const addNotification  =  (notif : Notification) => {
 axios.post('http://localhost:3000/api/addNotification',newNot)
 .then(()=>{alert("The Notification is send")})
 .catch((err)=>{console.log(err)})
}






  return (
    <div> 
    <div className='mt-6 mb-6 font-bold text-xl'> Send Notification </div>
 <div className='rounded ml-16 w-[1150px] h-[800px] mt-14'> 

 <div className='rounded shadow-lg w-[1150px] h-16 pt-6 pl-6  bg-slate-100 mb-2'> <div className='flex flex-r gap-3'><h1 className='ml-4 font-bold'>From : </h1> {emailOfUser} </div></div>

 <input className='rounded shadow-lg w-[1150px]  h-[200px] pl-6  bg-slate-100 mb-2' placeholder='Write the notification : 'onChange={(ev)=>{setNotifBody(ev.target.value)}}/>

   <button className="bg-orange-950 text-white px-4 py-2 rounded hover:bg-red-500 mt-12 mb-12 ml-[550px]" onClick={()=>{addNotification(newNot) }}> SEND   </button>
 </div></div>
  )
}

export default ContactUser
