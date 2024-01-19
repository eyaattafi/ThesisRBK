'use client'
import React, { useEffect, useState } from "react"
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdOutlineNotificationsActive } from "react-icons/md";

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
    },[])
 


    return(
        <div className="w-[800px] h-[500px] bg-slate-100 rounded shadow-lg ml-96 mt-20 mb-20">
            <h1 className="font-bold text-2xl mb-14"> Your Notifications </h1>
            {notif.map((el,i)=>(<div className="flex flex-r mb-5 ml-7">
                <button  onClick={()=>{setSh(!sh);setId(el.idnotification)}}>{sh && id=== el.idnotification? <IoIosNotificationsOutline size={25}/>:<MdOutlineNotificationsActive  size={25}/>} </button>
                <div className="w-[500px] h-auto border shadow-md mb-5 mt-6 ml-7 bg-transparent p-4">{el.notificationBody}</div>
                </div>
            ))}
           

        </div>
    )
}

export default Notification ;