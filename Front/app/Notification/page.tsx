'use client'
import React, { useEffect, useState } from "react"
import axios from 'axios'
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { TiDeleteOutline } from "react-icons/ti";
import Satisfaction from './Satisfaction'

interface Notif {
    idnotification : number,
    notificationBody : string ,
    notificationSeen : boolean ,
    userIduser : number
  }

const Notification = () =>{

const [notif,setNotif] = useState<Notif[]>([])
const storedUserId = localStorage.getItem('userId');
const [sh,setSh]=useState<boolean>(false)
const [id, setId] = useState<number>(0);
const [del,setDel] = useState<boolean>(false);
const not = {
  notificationSeen : true
}
console.log("idddd ",storedUserId);
console.log("notif",notif);



  // Get Notifications of one selected user //
const fetchNotifications = async () => {
    try {
      const res = await fetch(`http://localhost:3000/api/getNotifications/${storedUserId}`);
      const data = await res.json();

      setNotif(data);
    } catch (err) {
      console.error(err);
    }
  };

  
useEffect(()=>{
  fetchNotifications()
  },[del])

// update notification // 
const updateNot = (idNot : number) => {
  axios.put(`http://localhost:3000/api/updateNotification/${idNot}`,not).then(()=>{setSh(!sh)})
.catch((err)=>{console.log(err)})
}
// Delete Notification // 
const deleteNot = (idNot : number) => {
  axios.delete(`http://localhost:3000/api/deletenotification/${idNot}`).then(()=>{setDel(!del)})
  .catch((err)=>{console.log(err)})
}






    return(
    <div>
         <h1 className="font-bold text-2xl mb-2 mt-12 ml-80"> Your Notifications </h1>
        <div className="w-[1000px] h-auto bg-slate-100 rounded shadow-lg ml-80 mt-10 mb-20">
            {notif.map((el,i)=>(<div className="flex flex-r mb-5 ml-12">
                <button onClick={()=>{setId(el.idnotification);updateNot(el.idnotification)}}>{sh && id=== el.idnotification || el.notificationSeen? <IoIosNotificationsOutline size={25}/>:<MdOutlineNotificationsActive  size={25}/>} </button>
                <div className="w-[700px] h-auto border shadow-lg shadow-sky-900 mb-5 mt-6 ml-14 bg-transparent p-4">{el.notificationBody}</div>
               <div> <button onClick={()=>{deleteNot(el.idnotification)}}><TiDeleteOutline size={25}/></button></div>
                </div>
            ))}
           
           </div>
           <Satisfaction/>
        </div>
    )
}

export default Notification ;