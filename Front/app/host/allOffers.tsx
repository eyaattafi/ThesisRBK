"use client"
import React,{useContext} from 'react'
import { Slide} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'  
import Link from "next/link";
import { DataContext } from '../context'
function  AllOffers() {
  const  context = useContext(DataContext);
      
  return (
    <div>
                <h1 className='text-3xl font-bold ml-[50px]'>All offers</h1>

    <div className=" grid grid-cols-4 gap-7 p-12">
                {context?.allOffers.map((el,i:number)=>
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
  )
}

export default AllOffers