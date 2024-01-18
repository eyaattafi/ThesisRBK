'use client'
import { FaMapLocation } from "react-icons/fa6";
import { TbAirConditioning } from "react-icons/tb";
import { FaWifi } from "react-icons/fa";
import { PiTelevisionFill } from "react-icons/pi";
import { SlCalender } from "react-icons/sl";
import { DateRange } from 'react-date-range';
import { useContext, useState} from 'react'
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
import { Slide} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import Link from "next/link";
import { DataContext } from "../context";
import { Offers } from "./Offers";


export default function AuthenticatedHome(){

  const [openDate,setOpenDate]=useState(false)
  const [openDrop,setOpenDrop]=useState(false)
  const [showMore,setShowMore]=useState(false)
  const feature=[<FaSwimmingPool size={25} />,<TbAirConditioning size={25} />,<PiTelevisionFill size={25}/>,<FaWifi size={25}/>]
  const context=useContext(DataContext)
  const ConfReservations=context?.reservations.filter((el)=>{
    return el.reservationStatus==="confirmed"
  })
  console.log(ConfReservations)
  
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
                   
        <div className="bg-gray-200 flex flex-col m-10">
                    
             <h1 className=" text-3xl font-bold mt-3 ml-3">Our Features</h1>
             <p className=" mt-3 ml-3">Lorem Pellentesque in pharetra dui. Sed commodo nulla nec rhoncus elementum Sed commodo nulla nec rhoncus elementum.
             Sed commodo nulla nec rhoncus elementum Sed commodo nulla nec rhoncus elementum Sed commodo nulla nec rhoncus elementum.</p>

            <div className=" grid grid-cols-4 gap-7 p-12">
                  

                  {context?.categories.map((el,i)=>{
                    return (
                      <div className=" bg-white shadow-md p-4 rounded-md " key={i}>              
                          <div className="flex flex-center justify-center items-center gap-2">
                          {feature[i]}
                          <h1>{el.categorieName}</h1>
                          <IoMdArrowDropright size={25}/>
                          </div>                   
                      </div>
                    )
                  })}
                  
            </div>

        </div>

        <h1 className=" text-3xl font-bold mt-3 ml-8">Our Offers</h1>

      {showMore===false?<Offers/>:
      
      <div className=" grid grid-cols-4 gap-7 p-12">
                
      {context?.allOffers.map((el,i)=>{

        return(
          <div className="w-[300px] h-[400px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" key={i}>
            
                    
                  <Slide>         
                      {el.offerImages.map((slideImage, index)=> (
                          <Link href="/details">
                          <img className="rounded  w-full h-[200px]" src={slideImage}/>
                          <p>{``}</p>
                          </Link>
                      ))} 
                  </Slide>
              
              <div className="p-2">

                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white overflow-hidden">{el.offerTitle}</h5>
                      <p className="mb-1 font-normal text-gray-700 dark:text-gray-400 overflow-hidden">{el.offerDescription} </p>
              </div>
          </div>
        )
      })}
                 
    </div>
      
      }       

        <div className="flex justify-center items-center" onClick={()=>{
          setShowMore(!showMore)
        }}>
          <button className="bg-transparent hover:bg-orange-950 text-orange-950 font-semibold hover:text-white py-2 px-4 border border-orange-950 hover:border-transparent rounded">
            Button
          </button>
        </div>

        <div className="bottomDivContenair">
            <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id est laborum.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id est laborum.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id est laborum.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id est laborum.
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id est laborum.


            </p>
        </div>
          


</div>

         
    )
}