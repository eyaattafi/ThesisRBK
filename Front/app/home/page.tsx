'use client'
import { FaMapLocation } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { DateRange } from 'react-date-range';
import { useContext, useEffect, useState} from 'react'
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css'; 
import {format} from "date-fns"
import 'react-slideshow-image/dist/styles.css'
import { DataContext } from "../context";
import { Offers } from "./Offers";
import DropDown from "./DropDown";
import Features from "./Features";
import Info from "./Info";


export default function AuthenticatedHome(){

  const [openDate,setOpenDate]=useState(false)
  const context=useContext(DataContext)
  
  const confReservations=context?.reservations.filter((el,i)=>{
    return el.reservationStatus==="confirmed"
  })

  console.log(confReservations)
  
  const [date, setDate] = useState([
      {
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection'
      }
    ]);

    const startDate=new Date(format(date[0].startDate,'yyyy/MM/dd' ))
    const endDate=new Date(format(date[0].endDate,'yyyy/MM/dd' ))

    
    return (
      
        <div>
          

                <DropDown/>  

                <div className="container1">
                      <div className="headerSearch">

                      <div className="headerSearchItem">
                          <FaMapLocation className='headerIcon'/>
                          <input type="text" placeholder="Search destination" className="headerSearchInput"/>
                      </div>

                      <div className="headerSearchItem" onClick={()=>{setOpenDate(!openDate)}}>
                          <SlCalender className='headerIcon'/>
                          <span className="headerSearchText">{`${format(date[0].startDate,'yyyy/MM/dd' )} to ${format(date[0].endDate,'yyyy/MM/dd' )}`}</span> 
                          
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

                <Features/>
                <h1 className=" text-3xl font-bold mt-3 ml-8">Our Offers</h1>
                <Offers/>
                
                <Info/>
          

</div>

         
    )
}




