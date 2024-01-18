'use client'
import React,{MouseEventHandler, useState} from 'react';
import axios from 'axios'

interface Notification {
  notificationBody : string ,
  notificationSeen : boolean ,
  userIduser : number
}
interface User {
  iduser: number,
  userName: string,
  userEmail: string,
  userPassword: string,
  userConfirmPass: string,
  userImage: string,
  userBlocked: boolean
}
const CreateMessage = () => {

  const [email,setEmail]= useState<string>("")
 const [notifBody,setNotifBody]=useState<string>("")
 const [show,setShow]= useState<boolean>(false)
 const [user, setUser]=useState<User>({})
 const [userId,setUserId]=useState<number>(0)

  const newNot : Notification = {
    notificationBody : notifBody ,
    notificationSeen : false ,
    userIduser : userId
  }

  console.log("Notif", newNot)
const addNotification  =  (notif : Notification) => {
 axios.post('http://localhost:3000/api/addNotification',newNot)
 .then(()=>{alert("The Notification is send")})
 .catch((err)=>{console.log(err)})
}

const getUserByEmail = async (userEmail : string) => {
  const res = await fetch(`http://localhost:3000/api/oneUserByEmail/${userEmail}`)
  const data = await res.json();
  setUser(data)
  setUserId(data.iduser)
}
console.log("user ", user)
console.log("UserId", userId)

  return (
    <div> 
    <div className='mt-6 mb-6 font-bold text-xl'> New Notification </div>
 <div className='rounded ml-16 w-[1150px] h-[800px] mt-14'> 

<div className='flex flex-r gap-7 rounded shadow-lg w-[1150px] h-16 pt-6 pl-6 bg-slate-100 mb-2'> Select to whom you want to send : 
<label htmlFor="All Users">All Users</label>
<input className='w-5 h-5' type='checkbox' value="All Users" onClick={()=>{}}/>
<label htmlFor="All Users">One User</label>
<input className='w-5 h-5' type='checkbox' value="One User" onClick={()=>{setShow(!show)}}/>

</div>
<div>{show &&  <div className='flex flex-r'> <input className='rounded shadow-lg w-[1000px] h-16 pt-2 pl-6  bg-slate-100 mb-2' placeholder='Whrite the Email of the User here: ' onChange={(ev)=>{setEmail(ev.target.value)}}/>
<button className="bg-orange-950 text-white px-4 py-2 rounded hover:bg-red-500 mt-12 mb-12 ml-[550px]" onClick={()=>{ getUserByEmail(email) }}> Confirm </button> </div>}

</div>
 <input className='rounded shadow-lg w-[1150px]  h-[200px] pl-6  bg-slate-100 mb-2' placeholder='Write the notification : 'onChange={(ev)=>{setNotifBody(ev.target.value)}}/>

   <button className="bg-orange-950 text-white px-4 py-2 rounded hover:bg-red-500 mt-12 mb-12 ml-[550px]" onClick={()=>{addNotification(newNot) }}> SEND   </button>
 </div></div>
  )
}

export default CreateMessage
