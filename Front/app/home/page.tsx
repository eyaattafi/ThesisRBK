'use client'
import { FaMapLocation } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { DateRange } from 'react-date-range';
import { useContext, useEffect, useState} from 'react';
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css'; 
import {format} from "date-fns"
import 'react-slideshow-image/dist/styles.css'
import { DataContext } from "../context";
import { Offers } from "./Offers";
import DropDown from "./DropDown";
import Features from "./Features";
import Info from "./Info";
import QuestionRes from "../Components/QuestionRes";
import Link from "next/link"
import { Slide } from "react-slideshow-image";
import Satisfaction from "../Satisfaction";
import axios from "axios";


export default function AuthenticatedHome(){

  const [openDate,setOpenDate]=useState(false)
  const [showMore,setShowMore]=useState(false)
  const [input,setInput]=useState('')

  const context=useContext(DataContext)
  const ElID:number[]=[]
  const [showFiltred,setShowFiltred]=useState(false)
  const [offer,setOffer]=useState([])
   const [date, setDate] = useState([
      {
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection'
      }
    ]);


    console.log(offer)
    const inputStart=format(date[0].startDate,'yyyy-MM-dd' )
    const inputEnd=format(date[0].endDate,'yyyy-MM-dd' )


    const ElReservation=context?.reservations.filter((el,i)=>{
      return (el.reservationStatus==="confirmed") &&
      (el.reservationEndDate.toString()>=inputStart && (el.reservationEndDate.toString()<=inputEnd))
      &&(el.reservationStartDate.toString()>=inputStart && (el.reservationStartDate.toString()<=inputEnd))
    })

    ElReservation?.forEach((el)=>{
     
      return  ElID.push(el.offerIdoffer)
    })

   const filtredOffer=context?.allOffers.filter((el,i)=>{
    return !(ElID.includes(el.idoffer))
   })
    
   const handleSearch=()=>{
    axios.get('http://localhost:3000/api/categoryByName/'+input).then((res)=>{
       console.log(res.data)
      axios.get('http://localhost:3000/api/getAllByRegion/'+res.data.idcategorie).then(res=>setOffer(res.data))
    .catch(err=>err)
    }
    )
    .catch((err)=>console.log(err))
   }

   
    return (
      
        <div>
       
          <Satisfaction/>
                <DropDown/> 

          
              

                <div className="container1">
                      <div className="headerSearch">

                      <div className="headerSearchItem">
                          <FaMapLocation className='headerIcon'/>
                          <input type="text" placeholder="Search destination" className="headerSearchInput" onChange={(e)=>{setInput(e.target.value)}}/>
                      </div>

                      <div className="headerSearchItem" >
                        <div onClick={()=>setShowFiltred(!showFiltred)}>
                        <SlCalender className='headerIcon' />
                        </div>
                          
                          <span className="headerSearchText" onClick={()=>{setOpenDate(!openDate)}}>{`${format(date[0].startDate,'yyyy/MM/dd' )} to ${format(date[0].endDate,'yyyy/MM/dd' )}`}</span> 
                          
                      </div>

                      <button className=" btn bg-orange-950 hover:bg-orange-700 text-white font-bold py-1 px-2 rounded" onClick={handleSearch
                      }>Search</button>
                            
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
                {input&& <h1 className=" text-3xl font-bold mt-3 ml-8">By {input}</h1>}  
                <div className=" grid grid-cols-4 gap-7 p-12">
                {offer.map((el:any,i:number)=>{
                  
                  return(
                            <div className="w-[300px] h-[400px] bg-white border border-gray-200
                              rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" key={i}>
              
                              <Slide  key={i}>         
                                  {el.offerImages.map((slideImage:any, index:number)=> (
                                      <Link href="/details" key={i}>
                                      <img className="rounded  w-full h-[200px]" src={slideImage} />
                                      <p>{``}</p>
                                      </Link>
                                  ))} 
                              </Slide>
                
                            <div className="p-2">

                                    <h5 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white overflow-hidden">{el.offerTitle}</h5>
                                    <p className="mb-1 font-normal text-gray-700 dark:text-gray-400 overflow-hidden">{el.offerDescription} </p>
                            </div>
                      </div>
                  )
                })}
                </div>

                <h1 className=" text-3xl font-bold mt-3 ml-8">Our Offers</h1>
 
 {showFiltred===false?<Offers/>:

<div>

{showMore===false?
     
     <div className=" grid grid-cols-4 gap-7 p-12">
                
     {filtredOffer.slice(0,8).map((el,i)=>{

       return(
         <div className="w-[300px] h-[400px] bg-white border border-gray-200
          rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" key={i}>
           
                 <Slide  key={i}>         
                     {el.offerImages.map((slideImage, index)=> (
                         <Link href="/details" key={i}>
                         <img className="rounded  w-full h-[200px]" src={slideImage} />
                         <p>{``}</p>
                         </Link>
                     ))} 
                 </Slide>
             
             <div className="p-2">

                     <h5 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white overflow-hidden">{el.offerTitle}</h5>
                     <p className="mb-1 font-normal text-gray-700 dark:text-gray-400 overflow-hidden">{el.offerDescription} </p>
             </div>
         </div>
       )
     })}
                
   </div>
     
     :     
      <div className=" grid grid-cols-4 gap-7 p-12">
                
      {filtredOffer.map((el,i)=>{

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
            More Offers
          </button>
        </div>


      </div>

 }              
                

                <QuestionRes/>
                
                <Info/>
          

</div>

         
    )
}




