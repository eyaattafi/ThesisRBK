'use client'
import { FaMapLocation } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { DateRange } from 'react-date-range';
import {use, useState} from 'react'
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css'; 
import {format} from "date-fns"
import { FaRegCircleUser } from "react-icons/fa6";
import { FiAlignJustify } from "react-icons/fi";
import { FaUserTie } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoNotificationsCircle } from "react-icons/io5";
import { IoLogOut } from "react-icons/io5";
import { FaSwimmingPool } from "react-icons/fa";
import { IoMdArrowDropright } from "react-icons/io";


export default function AuthenticatedHome(){

  const [openDate,setOpenDate]=useState(false)
  const [openDrop,setOpenDrop]=useState(false)

const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);

  

    return (
      
        <div>

                <div className="relative inline-block text-left  ml-500 ">

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
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Notification</a>
                      </div>
                      
                      <div className="flex flex-r items-center justifiy-center">
                        <IoLogOut color={"#431407"}/>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">LogOut</a>
                      </div>

                    </div>
                  </div>}
                  
                </div>

                <div className="container1">
                      <div className="headerSearch">

                      <div className="headerSearchItem">
                          <FaMapLocation className='headerIcon'/>
                          <input type="text" placeholder="Search destination" className="headerSearchInput"/>
                      </div>

                      <div className="headerSearchItem" onClick={()=>{setOpenDate(!openDate)}}>
                          <SlCalender className='headerIcon'/>
                          <span className="headerSearchText">{`${format(date[0].startDate,'MM/dd/yyyy' )} to ${format(date[0].endDate,'MM/dd/yyyy' )}`}</span> 
                          
                      </div>

                      <button className=" btn bg-orange-950 hover:bg-orange-700 text-white font-bold py-1 px-2 rounded">Search</button>
                            
                      </div>

                      <div className="date">
                      { openDate===true && <DateRange
                                          editableDateInputs={true}
                                          onChange={(item:any) => setDate([item.selection])}
                                          moveRangeOnFirstSelection={false}
                                          ranges={date}
                                          rangeColors={["#9A3412"]}
                                          />}
                      </div>                              
                </div>

                <div className="homeFeaturesContenair">
                <div className="max-w-md bg-white shadow-md p-4 rounded-md ">               
                    <div className="flex flex-center justify-center items-center gap-2">
                    <FaSwimmingPool size={25} />
                    <h1>Picine</h1>
                    <IoMdArrowDropright size={25}/>
                    </div>                   
                </div>

                <div className="max-w-md bg-white shadow-md p-4 rounded-md ">               
                    <div className="flex flex-center justify-center items-center gap-2">
                    <FaSwimmingPool size={25} />
                    <h1>Picine</h1>
                    <IoMdArrowDropright size={25}/>
                    </div>                   
                </div>

                <div className="max-w-md bg-white shadow-md p-4 rounded-md ">               
                    <div className="flex flex-center justify-center items-center gap-2">
                    <FaSwimmingPool size={25} />
                    <h1>Picine</h1>
                    <IoMdArrowDropright size={25}/>
                    </div>                   
                </div>

                <div className="max-w-md bg-white shadow-md p-4 rounded-md ">               
                    <div className="flex flex-center justify-center items-center gap-2">
                    <FaSwimmingPool size={25} />
                    <h1>Picine</h1>
                    <IoMdArrowDropright size={25}/>
                    </div>                   
                </div>
                  
                </div>
        </div>

         
    )
}