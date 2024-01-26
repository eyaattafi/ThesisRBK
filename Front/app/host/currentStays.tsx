"use client"
import { MdOutlineEmail } from "react-icons/md";
import { DataContext } from '../context'
import React, { useState,useContext, useEffect } from 'react'
import axios from "axios";
import offer from "../../types/offer";
import user from "../../types/user";
import reservation from "../../types/reservations";
const CurrentStays = () => {
  const [offers,setOffers]=useState<offer[]>([])
  const [userData, setUserData]=useState<user[]>([])
  const [myreservation,setReservation]=useState<reservation[]>([])
  const userId = localStorage.getItem('userId');
  const  context = useContext(DataContext);
useEffect(()=>{
  axios.get(`http://localhost:3000/api/getAllOffers/${userId}`)
  .then((res) =>setOffers(res.data)).catch((err)=>console.log(err))
  console.log('first',myreservation)
},[userData,myreservation])

const userInfo=(idoffer:number)=>{
  axios.get(`http://localhost:3000/api/getReservations/${idoffer}`).then((res)=>{
  setReservation(res.data[0])
  console.log("111",res.data[0])
  axios.get(`http://localhost:3000/api/oneUser/${res.data[0].userIduser}`).then((res)=>setUserData(res.data)).catch((err)=>console.log(err))
}).catch((err)=>console.log(err))
  
}
console.log(userData)
    return ( 
      <div>
        <h2 className="flex justify-center text-2xl font-bold mb-4 border bg-white shadow mt-[30px] w-[1030px] ml-[35px]">Current Stays</h2>
        <div className="max-w-screen-lg mx-auto mt-4 flex">
        {/* Houses List Section */}
        <div className=" w-1/2 pr-4 border rounded-l-lg p-2 bg-white">
          <h2 className="flex justify-center text-2xl font-bold mb-4">Posted Houses</h2>
          <ul>
            {offers.filter((el,i)=>el.renterOrNot===1).map((el,i)=>
            <li  key={i} className="flex items-center justify-around w-full bg-white border rounded p-2 ml-1 shadow mb-1 "><img onClick={()=>userInfo(el.idoffer)} className="w-[80px] h-[60px] rounded cursor-pointer" src={el.offerImages[0]} alt="" /><span>{el.offerTitle}</span><span>{el.offerPrice}$</span></li>
            )}
            

          </ul>
        </div>
    
        {/* Rented User Info Section */}
        <div className="w-1/2 pl-4 border rounded-r-lg bg-white p-2">
          <h2 className="flex justify-center text-2xl font-bold mb-4">Rented User Info</h2>
          <hr className="mt-[20px] w-full border-t border-gray-300 my-4" />
          <div>
            {/* Display user information here */}
            <img className="ml-40 mt-8 w-[150px] h-[150px] rounded-[100px]" src={userData.userImage} alt="" />
            <h1 className="ml-[215px] mt-8 text-xl">{userData.userName}</h1>
          <p className="flex flex-row items-center justify-around mt-8 ml-[130px] border rounded p-2 w-52 "><MdOutlineEmail size={20} /> {userData.userEmail}</p>
          <div className="flex flex-row justify-around mt-8"> <h1>starting Date</h1> <h1 >Leaving Date</h1></div>
          <div className="flex flex-row justify-around"> <p className="mt-4 border rounded p-2 w-52 flex justify-center">{myreservation.reservationStartDate}</p> <p className="mt-4 border rounded p-2 w-52 flex justify-center ">{myreservation. reservationEndDate}</p></div>
          </div>
        </div>
      </div> 
      </div>
      );
}
 
export default CurrentStays;