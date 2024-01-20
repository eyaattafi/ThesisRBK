'use client'
import React,{ useEffect, useState} from 'react';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Slide, Zoom, Flip, Bounce } from 'react-toastify';




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
const CreateNotification = () => {

  const [email,setEmail]= useState<string>("")
 const [notifBody,setNotifBody]=useState<string>("")
 const [show,setShow]= useState<boolean>(false)
 const [user, setUser]=useState<User>({})
 const [userId,setUserId]=useState<number>(0)
 const [allUsersId,setAllUsersId] = useState<number[]>([])
 const successNot = () => {
  toast.success('🦄 Your Notification is sent successfully ! ', {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    transition: Bounce,
    });

 }
 
  

  const newNot : Notification = {
    notificationBody : notifBody ,
    notificationSeen : false ,
    userIduser : userId
  }

  console.log("Notif", newNot)
console.log("AllUsers",allUsersId);


// Send notification for oneUser Request // 
const addNotification  =  (notif : Notification) => {
 axios.post('http://localhost:3000/api/addNotification',newNot)
 .then(()=>{successNot()})
 .catch((err)=>{console.log(err)})
}

// Send notification to all users Request // 

const allUsNotification  =  () => {
let mypromises = allUsersId.map((element,i)=>(axios.post('http://localhost:3000/api/addNotification',{notificationBody : notifBody , userIduser : element })
.then(()=>{console.log("done")})
.catch((err)=>{console.log(err)})))

Promise.all(mypromises).then(()=>{successNot()})
.catch((err)=>{console.log(err)})
}
// Get One user by email //
const getUserByEmail = async (userEmail : string) => {
  const res = await fetch(`http://localhost:3000/api/oneUserByEmail/${userEmail}`)
  const data = await res.json();
  setUser(data)
  setUserId(data.iduser)
}
console.log("user ", user)
console.log("UserId", userId)

// Get All users // 

const getAllUsers = async () => {
  const res = await fetch(`http://localhost:3000/api/allUsers`)
  const data = await res.json();
  console.log("data",data)
  let arr = []
  for(let i=0; i<data.length; i++){
    arr.push(data[i].iduser)
  }
  setAllUsersId(arr)
}

useEffect(()=>{getAllUsers()},[])

// Function handle Send Notification // 
const handleSend = () => {
  if(!email){
   allUsNotification()
  }
  else {
    addNotification(newNot)
  }
}

  return (
    <div> 
        <ToastContainer  transition={Zoom}  autoClose={8000}/>
    <div className='mt-6 mb-6 font-bold text-xl'> Send Notification </div>
 <div className='rounded-xl w-[1000px] h-[500px] mt-14 mb-14 ml-32 pl-14 pt-20 bg-slate-300'> 

<div className='flex flex-r gap-7 rounded shadow-lg w-[900px] h-16 pt-6 pl-6 bg-slate-100 mb-2'> Select to whom you want to send : 
<label htmlFor="All Users">All Users</label>
<input className='w-5 h-5' type='checkbox' value="All Users" />
<label htmlFor="All Users">One User</label>
<input className='w-5 h-5' type='checkbox' value="One User" onClick={()=>{setShow(!show)}}/>

</div>
<div>{show &&  <div className='flex flex-r gap-3'> <input className='rounded shadow-lg w-[800px] pt-2 pl-6  bg-slate-100 mb-2' placeholder='Whrite the Email of the User here: ' onChange={(ev)=>{setEmail(ev.target.value)}}/>
<button className="bg-orange-950 text-white  rounded hover:bg-red-500 pl-3 pr-3  " onClick={()=>{ getUserByEmail(email) }}> Confirm </button> </div>}

</div>
 <input className='rounded shadow-lg w-[900px]  h-[200px] pl-6  bg-slate-100 mb-2' placeholder='Write the notification : 'onChange={(ev)=>{setNotifBody(ev.target.value)}}/>

   <button className="bg-orange-950 text-white px-4 py-2 rounded hover:bg-red-500 mt-12 mb-12 ml-[400px]" onClick={()=>{handleSend()}}> SEND   </button>
 </div></div>
  )
}

export default CreateNotification
