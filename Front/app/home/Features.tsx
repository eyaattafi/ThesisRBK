"use client"
import { useContext } from "react";
import { DataContext } from "../context";
import { FaSwimmingPool, FaWifi } from "react-icons/fa";
import { TbAirConditioning } from "react-icons/tb";
import { PiTelevisionFill } from "react-icons/pi";
import { IoMdArrowDropright } from "react-icons/io";


export default  function Features(){

    
  const feature=[<FaSwimmingPool size={25} />,<TbAirConditioning size={25} />,<PiTelevisionFill size={25}/>,<FaWifi size={25}/>]
  const context=useContext(DataContext)

    return (
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
    )
}