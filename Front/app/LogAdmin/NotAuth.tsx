'use client';
import React from 'react'
import { useRouter } from "next/navigation";


const NotAuth = () => {
    const { push } = useRouter();
  return (
    <div>
      
    <div className="fixed top-0 left-0 right-0 bottom-0 text-center flex flex-r items-center justify-center bg-transparent rounded shadow-2xl">
     <div className="bg-white h-[270px] w-[500px]rounded shadow-xl shadow-slate-500">
     <img className=" ml-44 w-36 h-36" src="https://i.gifer.com/GvB3.gif"/>  
    <h1 className='text-black justify-center font-bold'>RESTRICTION ! </h1>
       <p className=" text-xl text-red-500 bg-red-200 font-bold mb-10 mt-2 p-3" >YOU ARE NOT AUTHORIZED TO ACCESS THIS PAGE !</p>
      <button className='rounded shadow-sm bg-white mt-6 font-bold p-3 hover:bg-red-200' onClick={()=>push('/SignIn')}> Go back </button>

      
    </div>
  </div>
    </div>
  )
}

export default NotAuth
