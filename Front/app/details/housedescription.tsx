"use client"
import React,{useContext, useEffect, useState} from "react";
import axios from "axios";
import { PiHouseLine } from "react-icons/pi";
import { BsDoorOpen } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";
import { DataContext } from '../context'
import user from '../../types/user'
const HouseDescription = () => {
    const [host,setHost]=useState<user[]>([])
    const  context = useContext(DataContext);
useEffect(()=>{
    axios.get(`http://localhost:3000/api/oneUser/${context?.oneHouse.userIduser}`).then((res)=>setHost(res.data)).catch((err)=>console.log(err))
},[])

    return ( 
    <div>
        <div className="flex flex-row justify-between w-[680px] h-[80px] border-b border-gray-300">
            <div className="flex flex-col">
                <h1 className="font-bold text-xl">entire {context?.oneHouse.offerType} hosted by {host.userName}</h1>
                <h2>2 guests . 1 bedroom . 1 bed . 1 bathroom </h2>
            </div>
            <div className=""><img 
            src={host.userImage}
            alt="" 
            className="w-16 h-16 rounded-[300px]"
            /></div>
        </div>
        <div className="mt-[30px] flex flex-col gap-8">
            <div className="flex flex-row items-center"><PiHouseLine size={32} />
                <div className="ml-[15px]">
                    <h1 className="font-bold">{context?.oneHouse.offerType}</h1>
                    <h1 className="text-gray-500">you'll have the apartment to yourself</h1>
                </div>
            </div> 
            <div className="flex flex-row items-center"><BsDoorOpen size={32}/>
                <div className="ml-[15px]">
                    <h1 className="font-bold">self check-in</h1>
                    <h1 className="text-gray-500">check yourself in with the keypad</h1>
                </div>
            </div> 
            <div className="flex flex-row items-center"><SlCalender size={32}/>
                <div className="ml-[15px]">
                    <h1 className="font-bold">free cancelation</h1>
                </div>
            </div>
            <hr className="w-[680px] border-t border-gray-300 my-4" />
            <div className="w-[680px]"><p>{context?.oneHouse.offerDescription}</p>
            <button className="underline mt-[30px]">show more </button>
            </div>
            <hr className="w-[680px] border-t border-gray-300 my-4" />
        </div>
    </div> );
}
 
export default HouseDescription;
