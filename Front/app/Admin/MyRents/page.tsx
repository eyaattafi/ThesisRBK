"use client"
import React, { useState,useEffect} from 'react'
import { Slide} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'  
import Link from "next/link";
import { el } from 'date-fns/locale';


interface Offer{
    offerTitle : string,
    offerDescription : string,
    offerPrice : number,
    offerImages : JSON,
    offerType : string,
    offerStatus : boolean
  }
  
function MyRents() {

    const [offers,setOffers]= useState<Offer[]>([])

    const fetchOffers = async () => {
        try {
          const res = await fetch("http://localhost:3000/api/getAllOffers");
          const off = await res.json();
          setOffers(off)

        } catch (error) {
          console.error(error);
        }
    }



  console.log("offers",offers);
  
      
useEffect(()=>{
    fetchOffers()
},[])





  return (
    <div>

    <div className=" grid grid-cols-4 gap-7 p-12">
         {offers.map((element,i)=>(
   <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">                            
   <Slide>         
       {offers.map((el, i)=> (
           <Link href="/details">
           <img className="rounded" src={`${element.offerImages}`}/>
           </Link>
       ))} 
   </Slide>

<div className="p-2">

       <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{element.offerTitle}</h5>
       <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">{element.offerDescription} </p>
</div>
</div>

         ))}
           
        </div>
        </div>
  )
}

export default MyRents;