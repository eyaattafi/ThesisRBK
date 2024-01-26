"use client"
import React,{useContext, useEffect, useState} from 'react'
import { DataContext } from '../context'
import { Slide} from 'react-slideshow-image';
import Link from "next/link";
import 'react-slideshow-image/dist/styles.css'  
import Wishlist from '../../types/wishlist';
import axios from 'axios';
function page() {
    const  context = useContext(DataContext);
    const [wishes,setWishes]=useState<Wishlist[]>([])
    const userId = localStorage.getItem('userId');
useEffect(()=>{
    axios.get(`http://localhost:3000/api/allwishes/${userId&&userId}`).then((res)=>setWishes(res.data)).catch((err)=>err)
},[])
console.log("wish",wishes)
  return (
    <div className='flex flex-col justify-center items-center p-8 gap-4'>
        <div className='w-[1400px] rounded shadow'>
            <h1 className='font-bold p-4'>WishList({wishes.length})</h1>
            <div className=" grid grid-cols-4 p-2 gap-7">
            {wishes.map((el,i:number)=>
                  <div className="w-[300px] h-[350px] bg-slate-800  border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                  
                  <Slide>         
                      {el.offer.offerImages.map((slideImage, index:number)=> (
                          <Link href="/details">
                          <img onClick={()=>context?.setOne(el.offer.idoffer)} className="rounded-t-lg w-full h-[200px]" src={slideImage}/>
                          </Link>
                      ))} 
                  </Slide>
              
              <div className="p-2 ">

                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">{el.offer.offerTitle}</h5>
                      <p className="mb-1 font-normal text-gray-200 ">{el.offer.offerDescription} </p>
              </div>
          </div>)}
            </div>
        
        </div>
        <div className='w-[1300px]  rounded shadow'>
        <h1 className='font-bold p-4'>More Offers</h1>
        <div className=" grid grid-cols-4 p-2 gap-7">
        {context?.allOffers.slice(0,4).map((el,i:number)=>
                  <div className="w-[300px] h-[400px] bg-slate-800  border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                  
                  <Slide>         
                      {el.offerImages.map((slideImage, index:number)=> (
                          <Link href="/details">
                          <img onClick={()=>context.setOne(el.idoffer)} className="rounded-t-lg w-full h-[200px]" src={slideImage}/>
                          </Link>
                      ))} 
                  </Slide>
              
              <div className="p-2 ">

                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">{el.offerTitle}</h5>
                      <p className="mb-1 font-normal text-gray-200 overflow-hidden">{el.offerDescription} </p>
              </div>
          </div>)}
        </div>
        </div>
    </div>
  )
}

export default page