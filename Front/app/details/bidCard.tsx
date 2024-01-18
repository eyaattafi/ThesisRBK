"use client"
import React,{useEffect,useContext,useState} from "react";
import axios from "axios";
import { DataContext } from '../context'
import bid from '../../types/bid'
import user from '../../types/user';
const BidCard = () => {
    const  context = useContext(DataContext);
    const [bids,setBids]=useState<bid[]>([])
    useEffect(()=>{
        axios.get(`http://localhost:3000/api/getBid/${context?.oneHouse.idoffer}`).then((res)=>setBids(res.data)).catch((err)=>console.log(err))
      },[])
      console.log("0",bids)
      const getHighest=()=>{
        const sorted = bids.sort((a, b) => b.BIDprice - a.BIDprice);
        const highest=sorted[0]?.BIDprice
        return highest
      }
    return ( 
        <div className="w-[350px] border border-grey-300 rounded-[10px] shadow-md mr-[170px] py-[30px] px-[20px]">
        <div className="flex justify-between"><span className="text-xl">Starting from:{context?.oneHouse.offerPrice}$</span>
        <span className="underline">{context?.reviews.length} reviews</span></div>
        <div className="w-full h-[150px] border border-grey-400 rounded-[10px] mt-[20px]">
            <div className="h-[75px] border-b border-gray-300 rounded mt-[3px]"><input className="w-1/2 h-[65px] border-r border-gray-300" type="date"  />
            <input className="w-1/2 h-[65px]" type="date"  /></div>
            <input
            type="text"
            placeholder="Select an option"
            className="py-2 px-4 w-full focus:outline-none focus:border-blue-500"
            />
        </div>
        <div className="flex flex-col mt-[20px] gap-5"><button className="w-full h-[50px] bg-orange-950 text-white border rounded-[10px] ">Bid</button>
        <span className="flex justify-center text-gray-500">You won't be charged yet</span></div>
        <div className="flex flex-col mt-[20px] gap-5">
            {bids.map((el,i)=>
               <div key={i} className="flex flex-row justify-between"><div className="flex flex-row items-center gap-2"><img className="w-[50px] h-[50px] border rounded-[200px]" src={el.user.userImage} alt="" /><h1>{el.user.userName}</h1></div><span className="flex items-center">{el.BIDprice}$</span></div>
            )}
         
            <hr className="w-full border-t border-gray-300 my-4" />
            <div className="flex flex-row justify-between"><h1>highest</h1><span>{getHighest()}$</span></div>
        </div>
    </div>
    );
}
 
export default BidCard;