"use client"
import { FaRegCircleUser } from "react-icons/fa6";
import { FiAlignJustify } from "react-icons/fi";
import { FaUserTie } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoNotificationsCircle } from "react-icons/io5";
import { IoLogOut } from "react-icons/io5";
import { useState } from "react";
import { AiFillBell } from "react-icons/ai";
import { red } from "@mui/material/colors";
import { IoMdNotificationsOutline } from "react-icons/io";



export default function DropDown(){
    const [openDrop,setOpenDrop]=useState(false)
    const [notification,setNotification]=useState(false)
    return (
    
        <div className="relative flex  text-left  ml-500 ">

          <div className="absolute right-0 mr-7 mt-6 flex">
            {notification===false?<IoMdNotificationsOutline size={25} />:<AiFillBell  size={25} />}
              
              
            </div>

                <div className="dropDownIconHome" onClick={()=>{
                                        setOpenDrop(!openDrop)
                                      }}>
                                      <FaRegCircleUser color="white" size={30}/>
                                      <FiAlignJustify color="white" size={30}/>
                                      </div>
                                      
                {openDrop===true && <div className="absolute right-0 w-30 mt-2 origin-top-right bg-white border border-gray-300 divide-y divide-gray-100 rounded-md shadow-lg">
                    <div className="py-1 ml-5">

                      <div className="flex flex-r items-center justifiy-center ">
                        <FaUserTie color={"#431407"}/>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</a>
                      </div>

                      <div className="flex flex-r items-center justifiy-center">
                        <MdEmail color={"#431407"}/>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Message</a>
                      </div>

                      <div className="flex flex-r items-center justifiy-center">
                        <IoNotificationsCircle color={"#431407"}/>
                        <a href="/Notification" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Notification</a>
                      </div>
                      
                      <div className="flex flex-r items-center justifiy-center">
                        <IoLogOut color={"#431407"}/>
                        <a href="/Logout" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">LogOut</a>
                      </div>

                    </div>
                  </div>}
                  
                </div>

    )
}