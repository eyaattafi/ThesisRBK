import Link from "next/link"
import { Slide } from "react-slideshow-image"
import { DataContext } from "../context";
import { useContext, useState } from "react";


export function Offers(){
    const context=useContext(DataContext) 
    const [showMore,setShowMore]=useState(false)

    return(

      <div>

{showMore===false?
     
     <div className=" grid grid-cols-4 gap-7 p-12">
                
     {context?.allOffers.slice(0,8).map((el,i)=>{

       return(
         <div className="w-[300px] h-[400px] bg-white border border-gray-200
          rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" key={i}>
           
                 <Slide  key={i}>         
                     {el.offerImages.map((slideImage, index)=> (
                         <Link href="/details" key={i} >
                         <img className="rounded  w-full h-[200px]" src={slideImage} onClick={()=>context.setOne(el.idoffer)}/>
                         <p>{``}</p>
                         </Link>
                     ))} 
                 </Slide>
             
             <div className="p-2">

                     <h5 className="mb-1 text-2xl font-bold tracking-tight dark:text-white overflow-hidden">{el.offerTitle}</h5>
                     <p className="mb-1 font-normal text-black dark:text-gray-400 overflow-hidden">{el.offerDescription} </p>
             </div>
         </div>
       )
     })}
                
   </div>
     
     :     
      <div className=" grid grid-cols-4 gap-7 p-12">
                
      {context?.allOffers.map((el,i)=>{

        return(
          <div className="w-[300px] h-[400px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" key={i}>
            
                    
                  <Slide>         
                      {el.offerImages.map((slideImage, index)=> (
                          <Link href="/details">
                          <img className="rounded  w-full h-[200px]" src={slideImage}/>
                          <p>{``}</p>
                          </Link>
                      ))} 
                  </Slide>
              
              <div className="p-2">

                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white overflow-hidden">{el.offerTitle}</h5>
                      <p className="mb-1 font-normal text-gray-700 dark:text-gray-400 overflow-hidden">{el.offerDescription} </p>
              </div>
          </div>
        )
      })}
                 
      </div>
      
      }      

        <div className="flex justify-center items-center" onClick={()=>{
          setShowMore(!showMore)
        }}>
          <button className="bg-transparent hover:bg-orange-950 text-orange-950 font-semibold hover:text-white py-2 px-4 border border-orange-950 hover:border-transparent rounded">
            More Offers
          </button>
        </div>


      </div>
    
    )
}