"use client"
import React,{useEffect, useState} from "react";
import Link from "next/link"
import NewBooking from "./newBooking";
import CurrentStays from "./currentStays";
import NextArriving from "./nextArriving";
import Avatar from '@mui/material/Avatar';
import Bids from "./bids";
interface User{
    iduser:number,
    userName:string,
    userEmail:string,
    userPassword:string,
    phone:number,
    userImage:string,
    userBlocked:boolean,
    userLatitude:string,
    userLongitude:string
}

const HostManage = () => {
    const [ view,setView]=useState<string>('newbooking')
    const [clicked,setclicked]=useState([true,false,false,false])
    const [userm,setUserm]= useState<User>({})
    const userId = localStorage.getItem('userId');
    const renderComp=()=>{
        if (view==="newbooking"){
            return <NewBooking/>
        }else  if (view==="current"){
            return <CurrentStays/>
        }else  if (view==="next"){
            return <NextArriving/>
        }else  if (view==="bids"){
            return <Bids/>
        }
    }
    // Get oneuser details //
const fetchData = async () => {
    try {
      const res = await fetch(`http://localhost:3000/api/oneUser/${userId}`);
      const data = await res.json();
      console.log(data);
      setUserm(data);
    } catch (err) {
      console.error(err);
    }
  };

useEffect(()=>{fetchData()},[])

console.log("userm" , userm)
    return ( 
    <div className="w-[1100px]">
        <div className="flex flex-row justify-between items-center">
            <div className="text-4xl font-bold flex flex-r gap-4"> <Avatar alt="Remy Sharp" src={userm.userImage }  sx={{ width: 60, height: 60 }} /> <span className="mt-3">{userm.userName}</span></div> <Link className="flex justify-center items-center w-[120px] h-[30px] bg-slate-800 text-white rounded" href='' >add a home</Link> 
        </div>
        <div className="flex flex-col mt-[50px]">
            <h1 className="text-xl">Your reservations</h1>
            <div className="flex flex-row justify-between mt-[20px]">
                <button className={clicked[0]?"w-[150px] rounded-[10px] bg-slate-800 text-white":"w-[150px] border border-orange-950 rounded-[10px] hover:bg-slate-800 hover:text-white"} onClick={()=>{setView('newbooking'),setclicked([true,false,false,false])}}>New Bookings</button>
                <button className={clicked[1]?"w-[150px] rounded-[10px] bg-slate-800 text-white":"w-[150px] border border-orange-950 rounded-[10px] hover:bg-slate-800 hover:text-white"} onClick={()=>{setView('current'),setclicked([false,true,false,false])}}>Current Stays</button>
                <button className={clicked[2]?"w-[150px] rounded-[10px] bg-slate-800 text-white":"w-[150px] border border-orange-950 rounded-[10px] hover:bg-slate-800 hover:text-white"} onClick={()=>{setView('next'),setclicked([false,false,true,false])}}>Next Arriving</button>
                <button className={clicked[3]?"w-[150px] rounded-[10px] bg-slate-800 text-white":"w-[150px] border border-orange-950 rounded-[10px] hover:bg-slate-800 hover:text-white"} onClick={()=>{setView('bids'),setclicked([false,false,false,true])}}>Bids</button>
            </div>
        </div>
        <div className="w-full h-[500px] bg-slate-50 border rounded-[10px] shadow-inner mt-[30px] mb-2 overflow-y-auto">{renderComp()}</div>
    </div>
     );
}
 
export default HostManage;