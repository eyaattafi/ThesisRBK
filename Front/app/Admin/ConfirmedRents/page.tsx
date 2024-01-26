'use client'
import React, {useState,useEffect, ReactNode} from 'react'
import { AiOutlineArrowDown } from "react-icons/ai";
import { AiOutlineArrowUp } from "react-icons/ai";
import { Slide} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import {format} from "date-fns";
import Link from "next/link";

interface Reservation {
  idreservation : number,
    reservationStatus: string,
    reservationStartDate: any,
    reservationEndDate: Date,
    userIduser: number,
    offerIdoffer: number,
    warning : string,
    offer: Offer,
    user: user
}
interface Offer{
  offerTitle : string,
  offerDescription : string,
  offerPrice : number,
  offerImages : JSON,
  offerType : string,
  offerStatus : boolean
}

interface user {
    iduser: number,
    userName: string,
    userEmail: string,
    userPassword: string,
    userConfirmPass: string,
    userImage: string,
    userBlocked: boolean
  }

const ConfirmedRents = () => {
const [confirmed,setConfirmed] =useState<Reservation[]>([])
const [refresh,setRefresh] = useState<boolean>(false)
const  currentDate : any= format(new Date(),'yyyy-MM-dd')

console.log("confirmed",confirmed)


const turnDateFormat=(current : Date)=>{
  return( ` ${current.getFullYear()}-${current.getMonth() + '1'}-${current.getDate()}`)
}



const verifyWarning = (array:Reservation[]) => {
  if(array){
  let arr = array.slice()
 let result = arr.filter((el,i)=>{return el.warning !=="closed"})
  setConfirmed(result)
}
}
// Get All Confirmed Rents // 
    const fetchConfirmed = async () => {
        try {
          const response = await fetch("http://localhost:3000/api/getConfirmedReservations");
          const conf = await response.json();
          setConfirmed(conf)
          verifyWarning(conf)
        } catch (error) {
          console.error(error);
        }
    }

useEffect(()=>{ 
  fetchConfirmed()

},[])
const current = turnDateFormat(new Date())
  return (
    <>
<div className=" grid grid-cols-4 gap-7 p-12">
        {confirmed.map((el,j)=>(
        
    <div key={j} className='w-[300px] h-[400px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
<Slide>         
       {el.offer.offerImages.map((element, i)=> (
          
           <img key={i} className="rounded  w-full h-[200px]" src={`${element}`}/>
      
       ))} 
   </Slide>
   <div className="p-2" >
   <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{el.offer.offerTitle}</h5>
      <div className='w-full rounded-md shadow-sm mt-3 pl-1'><span className='font-bold'> Rented to : </span> {el.user.userName} </div>
      <div className='w-full rounded-md shadow-sm mt-3 pl-1 '><span className='font-bold'> Contact: </span>{el.user.userEmail}</div>
      <div className='w-full rounded-md shadow-sm mt-3 pl-1'><span className='font-bold'>Price : </span> {el.offer.offerPrice}</div>
      <div className='w-full rounded-md shadow-sm mt-3 pl-1'><span className='font-bold'>Period:</span> {el.reservationStartDate}<span className='font-bold'> to </span>  {el.reservationEndDate}</div>
      <div className='w-full rounded-md shadow-sm mt-3 pl-1'>{current == new Date(el.reservationEndDate)?<h1>Still Three days before closure</h1> : <h1></h1>} </div>
    </div></div>))}

      </div>
     
    </>
  )
}

export default ConfirmedRents;
