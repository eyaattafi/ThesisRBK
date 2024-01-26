"use client"
import { useContext, useState } from "react";
import { DataContext } from "../context";
import { FaSwimmingPool, FaWifi } from "react-icons/fa";
import { TbAirConditioning } from "react-icons/tb";
import { PiTelevisionFill } from "react-icons/pi";
import { IoMdArrowDropright } from "react-icons/io";
import { GiRose } from "react-icons/gi";
import axios from "axios";
import { Slide } from "react-slideshow-image";
import { RiSchoolFill } from "react-icons/ri";
import { MdLiving } from "react-icons/md";
import { FaSearchLocation } from "react-icons/fa";
import { AiOutlineSafety } from "react-icons/ai";
import Link from "next/link";


export default  function Features(){
  const [data,setData]=useState([])
  const [show,setShow]=useState(false)
  const handleClick=(id:number)=>{
    axios.get('http://localhost:3000/api/getByFeature/'+id)
    .then((res)=>setData(res.data)).catch(err=>err)
    setShow(!show)
  }

  console.log(data)
    
  const feature=[<FaSwimmingPool size={25} />,<TbAirConditioning size={25} />,<PiTelevisionFill size={25}/>,<FaWifi size={25}/>,<GiRose size={25}/>, <RiSchoolFill size={25}/>, <MdLiving size={25}/>,<AiOutlineSafety size={25}/>]
  const context=useContext(DataContext)

    return (
        <div className="bg-gray-200 flex flex-col m-10">
                    
             <h1 className=" text-3xl font-bold mt-3 ml-3">Our Features</h1>
             <p className=" mt-3 ml-3">It doesn't matter if you have a great real estate property with you, it will all be considered useless if you don't have the ability to get a tenant for the place. At the end of the day, the goal of a real estate company or agent is to earn handsome profits. 

When we talk about a property a tenant looks for a number of things such as the quality of the property, the surroundings, excellent schools in the locality, the location, the distance between office premises and the property, and henceforth. </p>

            <div className=" grid grid-cols-4 gap-7 p-12">
                  

                  {context?.categories.map((el,i)=>{
                    return (
                      <div className=" bg-white shadow-md p-4 rounded-md " key={i} >              
                          <div className="flex flex-center justify-center items-center gap-2" onClick={()=>handleClick(el.idcategorie)}>
                          {feature[i]}
                          <h1>{el.categorieName}</h1>
                          <IoMdArrowDropright size={25}/>
                          </div>                   
                      </div>
                    )
                  })}
                  
            </div>

   {show===true&&
   <div className=" grid grid-cols-4 gap-7 p-12 ">
   {data.map((el:any,i:number)=>{
     return (
           <div className="w-[300px] h-[400px] bg-white border border-gray-200
            rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" key={i}>
             
                   <Slide  key={i}>         
                       {el.offer.offerImages.map((slideImage:any, index:number)=> (
                           <Link href="/details" key={i}>
                           <img className="rounded  w-full h-[200px]" src={slideImage} />
                           <p>{``}</p>
                           </Link>
                       ))} 
                   </Slide>
               
               <div className="p-2">
  
                       <h5 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white overflow-hidden">{el.offer.offerTitle}</h5>
                       <p className="mb-1 font-normal text-gray-700 dark:text-gray-400 overflow-hidden">{el.offer.offerDescription} </p>
               </div>
           </div>
         )
       })}
                  
     </div>
   }        
            
           </div>
    )
}