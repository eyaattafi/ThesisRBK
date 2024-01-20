"use client"
import React,{useContext} from 'react'
import { Slide} from 'react-slideshow-image';
import Link from "next/link";
import 'react-slideshow-image/dist/styles.css'
import { DataContext } from '../context'
function OneOfferCard({data}) {
  const  context = useContext(DataContext);
  return (
  
         <div className="w-[300px] h-[400px] bg-slate-800 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                  
                                  <Slide>         
                                      {data.offerImages.map((slideImage:JSON, index:number)=> {
                                        // console.log(index);
                                        
                                       return <div>
                                           <Link href="/details" key={index}>
                                          <img onClick={()=>context?.setOne(data.idoffer)} className="rounded-t-lg w-full h-[200px]" src={`${slideImage}`}/>
                                          </Link>
                                        </div>
                                })} 
                                  </Slide>
                              
                              <div className="p-2 ">
                              
                                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">{data.offerTitle}</h5>
                                      <p className="mb-1 font-normal text-gray-200 ">{data.offerDescription}</p>
                              </div>
                              </div>
   
   
  )
}

export default OneOfferCard