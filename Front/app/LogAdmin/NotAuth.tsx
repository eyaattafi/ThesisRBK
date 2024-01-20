'use client';
import React from 'react'
import { useRouter } from "next/navigation";


const NotAuth = () => {
    const { push } = useRouter();
  return (
    <div>
      
    <div className="fixed top-0 left-0 right-0 bottom-0 text-center flex flex-r items-center justify-center bg-transparent rounded shadow-2xl">
     <div className="bg-white p-11 h-auto w-[900px] border-4 border-orange-950  rounded shadow-md">
     <img className="w-96 h-auto ml-52" src="https://www.shutterstock.com/image-vector/vector-attention-sign-exclamation-mark-600nw-1725119242.jpg"/>  
    
       <p className=" text-3xl text-red-500 font-bold mb-10 mt-6">YOU ARE NOT AUTHORIZED TO SEE THIS PAGE !</p>
      <button className='rounded shadow-sm bg-white' onClick={()=>push('/SignIn')}> Go back </button>
      
    </div>
  </div>
    </div>
  )
}

export default NotAuth
