import React from "react";
import { MdPool } from "react-icons/md";
import { AiFillCaretRight } from "react-icons/ai";
import { FaSwimmingPool } from "react-icons/fa";
import { TbAirConditioning } from "react-icons/tb";
import { PiTelevisionFill } from "react-icons/pi";
import { FaWifi } from "react-icons/fa6";
import {useContext} from 'react'
import { DataContext } from "./context";
import { IoMdArrowDropright } from "react-icons/io";

const Equipements = () => {

  const feature=[<FaSwimmingPool size={25} />,<TbAirConditioning size={25} />,<PiTelevisionFill size={25}/>,<FaWifi size={25}/>]
  const context=useContext(DataContext)
  

    return (
      <div className=" grid grid-cols-4 gap-7 p-12">
                  

      {context?.categories.map((el,i)=>{
        return (
          <div className=" bg-white shadow-md p-4 rounded-md " >              
              <div className="flex flex-center justify-center items-center gap-2">
              {feature[i]}
              <h1>{el.categorieName}</h1>
              <IoMdArrowDropright size={25}/>
              </div>                   
          </div>
        )
      })}
      
</div>
    )
}


export default Equipements;