// 'use client'
// import React,{useState,useEffect} from 'react';
// import axios from 'axios'
// import Link from 'next/link'
// import { usePathname } from 'next/navigation'

// interface Notification {
//   notificationBody : string ,
//   notificationSeen : boolean ,
//   userIduser : number
// }
// interface User {
//   iduser: number,
//   userName: string,
//   userEmail: string,
//   userPassword: string,
//   userConfirmPass: string,
//   userImage: string,
//   userBlocked: boolean
// }
// const ContactUser = () => {
//   const router = usePathname()
//   const [email,setEmail]= useState<string>("")
//  const [notifBody,setNotifBody]=useState<string>("")
//  const [show,setShow]= useState<boolean>(false)
//  const [user, setUser]=useState<User>({})
//  const [userId,setUserId]=useState<number>(0)


// // Get idUser from the path router //
// const getIdUserFromUrl = (url : string) => {
//   const parts = url.split("/")
//   const potentialId = parts[parts.length-2]
//   if(Number.isInteger(parseInt(potentialId))){
//     return parseInt(potentialId)
//   }else{
//     return null
//   }}

// const idOfUser : number | null = getIdUserFromUrl(router)

//   const newNot : Notification = {
//     notificationBody : notifBody ,
//     notificationSeen : false ,
//     userIduser : userId
//   }

//   console.log("Notif", newNot)
// const addNotification  =  (notif : Notification) => {
//  axios.post('http://localhost:3000/api/addNotification',newNot)
//  .then(()=>{alert("The Notification is send")})
//  .catch((err)=>{console.log(err)})
// }

// // Get oneuser details //
// const fetchData = async (iduser : number | null) => {
//   try {
//     const res = await fetch(`http://localhost:3000/api/oneUser/${iduser}`);
//     const data = await res.json();
//     console.log(data);
    
//     setUser(data);
//   } catch (err) {
//     console.error(err);
//   }
// };
// console.log("user ", user)
// console.log("UserId", userId)


// useEffect(()=>{
//   fetchData(idOfUser)
// },[])
//   return (
//     <div> 
//     <div className='mt-6 mb-6 font-bold text-xl'> New Notification </div>
//  <div className='rounded ml-16 w-[1150px] h-[800px] mt-14'> 

//  <div className='rounded shadow-lg w-[1150px] h-16 pt-6 pl-6  bg-slate-100 mb-2'> <div className='flex flex-r gap-3'><h1 className='ml-4 font-bold'>From : </h1> {user.userEmail} </div></div>
// <div>{show &&  <div className='flex flex-r'> <input className='rounded shadow-lg w-[1000px] h-16 pt-2 pl-6  bg-slate-100 mb-2' placeholder='Whrite the Email of the User here: ' onChange={(ev)=>{setEmail(ev.target.value)}}/>
// <button className="bg-orange-950 text-white px-4 py-2 rounded hover:bg-red-500 mt-12 mb-12 ml-[550px]" onClick={()=>{ getUserByEmail(email) }}> Confirm </button> </div>}

// </div>
//  <input className='rounded shadow-lg w-[1150px]  h-[200px] pl-6  bg-slate-100 mb-2' placeholder='Write the notification : 'onChange={(ev)=>{setNotifBody(ev.target.value)}}/>

//    <button className="bg-orange-950 text-white px-4 py-2 rounded hover:bg-red-500 mt-12 mb-12 ml-[550px]" onClick={()=>{addNotification(newNot) }}> SEND   </button>
//  </div></div>
//   )
// }

// export default ContactUser
