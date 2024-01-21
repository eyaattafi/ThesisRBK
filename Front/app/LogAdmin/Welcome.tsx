'use client';
import React from 'react'
import { useRouter } from "next/navigation";

const Welcome = () => {
    const { push } = useRouter();
  return (
    <div>

      
      <div className="fixed top-0 left-0 right-0 bottom-0 text-center flex flex-r items-center justify-center bg-transparent rounded shadow-2xl">
       <div className="bg-white p-11 h-auto w-auto border-4 border-orange-950  rounded shadow-md">
       <img className="w-96 h-auto justify-center" src="https://gifdb.com/images/high/swirling-welcome-back-2g3wyipihivjpll2.gif"/>  
      

        
        
      </div>
    </div>
    </div>
  )
}

export default Welcome
