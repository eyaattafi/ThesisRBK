"use client"
import React,{useState,useEffect} from 'react';
import { FaRegCircleUser } from "react-icons/fa6";
import { FiAlignJustify } from "react-icons/fi";
import { FaUserTie } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoNotificationsCircle } from "react-icons/io5";
import { IoLogOut } from "react-icons/io5";
import { AiFillBell } from "react-icons/ai";
import { red } from "@mui/material/colors";
import { IoMdNotificationsOutline } from "react-icons/io";
import { PiUserSwitchFill } from "react-icons/pi";
import Badge from '@mui/material/Badge';
import Link from "next/link";
import Avatar from '@mui/material/Avatar';
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


export default function DropDown(){

    const [openDrop,setOpenDrop]=useState<boolean>(false)
    const [notifNumb,setNotifNumb]=useState<number>(0)
    const storedUserId = localStorage.getItem('userId');
    const [userm,setUserm]= useState<User>({})


//Get Notification number of the selected user // 
const fetchNotifications = async () => {
  try {
    const res = await fetch(`http://localhost:3000/api/unreadNotification/${storedUserId}`);
    const data = await res.json();
console.log("data",data)
    setNotifNumb(data.length);
  } catch (err) {
    console.error(err);
  }
};
    // Get oneuser details //
    const fetchData = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/oneUser/${storedUserId}`);
        const data = await res.json();
        console.log(data);
        setUserm(data);
      } catch (err) {
        console.error(err);
      }
    };
  

  
//
useEffect(()=>{
  fetchData();
  fetchNotifications()
  },[])

    


console.log('userm',userm);


    return (
    
        <div className="relative flex  text-left  ml-500 ">


                <div className="dropDownIconHome" onClick={()=>{
                                        setOpenDrop(!openDrop)
                                      }}>
                                         <Badge badgeContent={notifNumb} color="primary">
                                         <Avatar alt="Remy Sharp" src={userm.userImage }  sx={{ width: 60, height: 60 }} />
                                      <div className='mt-3'><FiAlignJustify color="white" size={30}/></div>
                                      </Badge>
                                      </div>
                                      
                {openDrop===true && <div className="absolute right-0 w-30 mt-20 origin-top-right bg-white border border-gray-300 divide-y divide-gray-100 rounded-md shadow-lg">
                    <div className="py-1 ml-5">

                      <div className="flex flex-r items-center justifiy-center ">
                          <FaUserTie color={"#431407"}/>
                          <Link href="Profile">
                          <b className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</b>
                          </Link>
                      </div>

                      <div className="flex flex-r items-center justifiy-center ">
                          <PiUserSwitchFill color={"#431407"}/>
                          <Link href="/host">
                          <b className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Host-Mode</b>
                          </Link>
                      </div>
                      
                      <div className="flex flex-r items-center justifiy-center">
                          <MdEmail color={"#431407"}/>
                          <Link href="#">
                          <b className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Message</b>
                          </Link>
                      </div>

                      <div className="flex flex-r items-center justifiy-center">
                      <Badge badgeContent={notifNumb} color="primary">
                        <IoNotificationsCircle color={"#431407"}/>     </Badge>
                        <Link href="/Notification">
                      
                        <b className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Notification</b>
                  
                        </Link>
                      </div>
                      
                      <div className="flex flex-r items-center justifiy-center">
                          <IoLogOut color={"#431407"}/>
                          <Link href="/Logout">
                          <b className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">LogOut</b>
                          </Link>
                      </div>

                    </div>
                  </div>}
                  
                </div>

    )
}