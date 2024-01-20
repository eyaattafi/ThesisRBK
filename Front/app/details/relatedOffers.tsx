"use client"
import React,{useContext} from "react";
import { DataContext } from '../context'
import { Slide} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'  
import Link from "next/link";
const RelatedOffers = () => {
    const  context = useContext(DataContext);
    return ( 
    <div className="">
        <h1 className="font-bold text-xl ml-[75px]">Related offers</h1>
        <div className=" grid grid-cols-4 gap-7 p-8">
            {context?.allOffers.filter((el,i)=>el.offerType===context?.oneHouse.offerType && el.idoffer!==context?.oneHouse.idoffer).map((el,i)=>
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
     </div>
            )}
        </div>
        <hr className="flex items-baseline w-[680px] border-t border-gray-300 my-4 ml-[75px]" />
    </div> );
}
 
export default RelatedOffers;