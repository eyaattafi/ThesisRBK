'use client'
import React from 'react'
import  {useState,useEffect} from 'react';
import { Slide} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import axios from 'axios';
import ConfirmDelete from './ConfirmDelete';


interface Reservation {
    idreservation : number,
      reservationStatus: string,
      reservationStartDate: any,
      reservationEndDate: any,
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
  

const SalesHistorical = () => {

const [hist,setHist] = useState<Reservation[]>([])
const [refresh,setRefresh] = useState<boolean>(false)
const [show,setShow] = useState<boolean>(false)
const [idRes,setIdRes]= useState<number>(0)

//Fetch archive of reservations // 
const fetchHistory = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/exceededReservations");
      const h = await response.json();
      setHist(h)
    } catch (error) {
      console.error(error);
    }
}

// delete reservation //
const  deleteRes = (idRes : number) => {
    axios
      .delete(`http://localhost:3000/api/deletereservation/${idRes}`)
      .then(() => {
        setRefresh(!refresh);
      })
      .catch((err) => {
        console.error(err);
      });
  };

// Handle Confirmation //
const handleCancel = () => {
    setRefresh(!refresh)
    setShow(!show)
  }

  const handleConfirm = () => {
    deleteRes(idRes)
     setShow(!show)
  }



useEffect(()=>{fetchHistory()},[refresh])

  return (
    <div>
        <div> {show && <ConfirmDelete  onConfirm={handleConfirm} onCancel={handleCancel}/>}</div>

{!show &&<div className=" grid grid-cols-4 gap-7 p-12 ">

        {hist.map((el,j)=>(
        
    <div key={j} className='w-[300px] h-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
  <div className='bg-gray-400 w-full h-14 font-bold text-center text-xl pt-4'> ARCHIVE </div>
<Slide>         
       {el.offer.offerImages.map((element, i)=> (
          
           <img key={i} className="rounded  w-full h-[200px]" src={`${element}`}/>
      
       ))} 
   </Slide>
   <div className="p-2" >
   <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{el.offer.offerTitle}</h5>
      <div className='w-full rounded-md shadow-sm mt-3 pl-1'><span className='font-bold'> Last Renter: </span> {el.user.userName} </div>
      <div className='w-full rounded-md shadow-sm mt-3 pl-1'><span className='font-bold'>Last Price : </span> {el.offer.offerPrice}</div>
      <div className='w-full rounded-md shadow-sm mt-3 pl-1'><span className='font-bold'>Last Period:</span> {el.reservationStartDate}<span className='font-bold'> to </span>  {el.reservationEndDate}</div>
         <button className=" bg-gray-200 hover:bg-orange-700 text-black font-bold py-1 px-2 rounded mb-4 mt-4 ml-12" onClick={() => {setIdRes(el.idreservation); setShow(!show)}}> Remove from Archive </button>
         </div></div>))}

      </div>}
     
    
    </div>
  )
}

export default SalesHistorical
