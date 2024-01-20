'use client'
import React, {useState,useEffect, ReactNode} from 'react'
import { AiOutlineArrowDown } from "react-icons/ai";
import { AiOutlineArrowUp } from "react-icons/ai";

interface Reservation {
    reservationStatus: string,
    reservationStartDate: Date | ReactNode,
    reservationEndDate: Date | ReactNode,
    userIduser: number,
    offerIdoffer: number,
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
const [offerConf,setOfferConf]=useState<Offer>({})
const [more,setMore] = useState<boolean>(false)
const [str,setStr]= useState<string>("See More")
    const fetchConfirmed = async () => {
        try {
          const response = await fetch("http://localhost:3000/api/confirmedReservations");
          const conf = await response.json();
          setConfirmed(conf)


        } catch (error) {
          console.error(error);
        }
    }

      console.log("confirmed",confirmed)
const changeStr = () =>{
  if(more === false){
    setStr("Show less")
  }
  else {setStr("Show More")}
}
  


useEffect(()=>{
    fetchConfirmed()
},[])

  return (
    <>
    <div className='grid grid-cols-3 gap-12 ml-28 mt-44'>
        {confirmed.slice(0,3).map((el,i)=>(
    
    <div className='grid grid-cols-1 w-80 h-[500px] bg-slate-200 rounded-lg shadow-lg text-justify p-4'>
      <img className='mt-6 pl-1' src='https://media.istockphoto.com/id/1442148484/photo/3d-rendering-of-modern-suburban-house-in-the-garden.jpg?s=612x612&w=0&k=20&c=8Iu_h5cFOEnlPz4_n2nfSUtOyfM_a-hHx9rmlxMF2rI='/>
      <div className='w-full rounded-md shadow-sm mt-3 pl-1'><span className='font-bold'> Rented to : </span> {el.user.userName} </div>
      <div className='w-full rounded-md shadow-sm mt-3 pl-1 '><span className='font-bold'> Contact: </span>{el.user.userEmail}</div>
      <div className='w-full rounded-md shadow-sm mt-3 pl-1'><span className='font-bold'>Price : </span> {el.offer.offerPrice}</div>
      <div className='w-full rounded-md shadow-sm mt-3 pl-1'><span className='font-bold'>Period:</span> {el.reservationStartDate} <span className='font-bold'> to </span>  {el.reservationEndDate}</div>
    </div>))}

    {more===true &&  confirmed.slice(4,confirmed.length).map((el,i)=>(
    
    <div className='grid grid-cols-1 w-80 h-[500px] bg-slate-200 rounded-lg shadow-lg text-justify p-4'>
      <img className='mt-6 pl-1' src='https://media.istockphoto.com/id/1442148484/photo/3d-rendering-of-modern-suburban-house-in-the-garden.jpg?s=612x612&w=0&k=20&c=8Iu_h5cFOEnlPz4_n2nfSUtOyfM_a-hHx9rmlxMF2rI='/>
      <div className='w-full rounded-md shadow-sm mt-3 pl-1'><span className='font-bold'> Rented to : </span> {el.user.userName} </div>
      <div className='w-full rounded-md shadow-sm mt-3 pl-1 '><span className='font-bold'> Contact: </span>{el.user.userEmail}</div>
      <div className='w-full rounded-md shadow-sm mt-3 pl-1'><span className='font-bold'>Price : </span> {el.offer.offerPrice}</div>
      <div className='w-full rounded-md shadow-sm mt-3 pl-1'><span className='font-bold'>Period:</span> {el.reservationStartDate} <span className='font-bold'> to </span>  {el.reservationEndDate}</div>
    </div>)) 
    }
    <div><button className='font-bold text-xl text-justify mb-8' onClick={()=>{setMore(!more);changeStr() }} > {str} {more===true? <AiOutlineArrowUp/> : <AiOutlineArrowDown /> }</button></div> 
    </div>
     
    </>
  )
}

export default ConfirmedRents;