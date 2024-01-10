'use client'
import React,{useState,useEffect} from 'react';
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaArrowRotateLeft } from "react-icons/fa6";
import { FaArrowRotateRight } from "react-icons/fa6";
import { FaArrowsRotate } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";


interface Claim {
  inBoxObject : string,
  inBoxBody : string,
  inBoxDate: Date,
  inBoxStatus : string,
  User : {}
}

interface User {
  iduser: number,
  userName: string,
  userEmail: string,
  userPassword: string,
  userConfirmPass: string,
  userImage: string,
  userBlocked: boolean
}


const Claims  = () => {

  const [claim,setClaim] = useState<Claim[]>([])
useEffect(()=>{
  fetchData(2)
},[])
  const fetchData = async (idadmin : number) => {
    try {
      const res = await fetch(`http://localhost:3000/api/getClaims/2`);
      const data = await res.json();
      console.log(data);
      
      setClaim(data);
    } catch (err) {
      console.error(err);
    }
  };

  console.log("claims : ", claim)

  return (
   
   <div>
        <div className='rounded w-32 bg-gray-100 h-16 text-center font-bold pt-2 shadow-2xl ml-6 mt-6 text-2xl'> CLAIMS </div>
<div className='shadow-2xl ml-16 w-[1150px] h-[600px]'>
<div className='flex flex-r justify-start mt-20'>
    <button className='shadow-xl rounded w-12 h-12  bg-gray-200 justify-center hover:bg-gray-300 ml-1 '><RiDeleteBin6Line size={30} className=' ml-3'/></button>
    <button className='shadow-xl rounded w-12 h-12  bg-gray-200 justify-center hover:bg-gray-300 ml-1'><FaArrowRotateLeft size={20} className=' ml-3'/></button>
    <button className='shadow-xl rounded w-12 h-12  bg-gray-200 justify-center hover:bg-gray-300 ml-1'><FaArrowRotateRight size={20} className=' ml-3'/></button>
    <button className='shadow-xl rounded w-12 h-12  bg-gray-200 justify-center hover:bg-gray-300 ml-1'>< FaArrowsRotate size={20} className=' ml-3'/></button>
</div>

    <div >
  {/***********First claim */}
  {claim.map((el,i)=>{
    return (
      <div className='flex flex-r gap-10 ml-10 mt-20'>
      <label><input type="checkbox" className='mr-7'/></label>
       <CiStar size={25}/> 
       <h1  className='font-bold ml-6 text-blue-400'> {el.user.userName} </h1> 
       <h1 className='font-bold'> 2024/REC/{el.user.iduser}</h1>
       <h3 className='w-[400px]'>{el.inboxBody}</h3>
       <h3 className='ml-2'>date {el.inboxDate}</h3> 
      </div>
    )
    
  })}
   
 
  {/***********Second claim */}
  <div className='flex flex-r gap-10 ml-10 mt-8'>
    <label><input type="checkbox" className='mr-7'/></label>
     <CiStar size={25}/> 
     <h1  className='font-bold ml-6 text-blue-400'> Sender </h1> 
     <h1 className='font-bold'>ID Sender as a reference</h1>
     <h3 className='w-[400px]'>Body of the claim Body of the claim Body of the .....</h3>
     <h3 className='ml-2'>Date of claim</h3> 
    </div>
 

  {/***********Third claim */}
  <div className='flex flex-r gap-10 ml-10 mt-8'>
    <label><input type="checkbox" className='mr-7'/></label>
     <CiStar size={25}/> 
     <h1  className='font-bold ml-6 text-blue-400'> Sender </h1> 
     <h1 className='font-bold'>ID Sender as a reference</h1>
     <h3 className='w-[400px]'>Body of the claim Body of the claim Body of the .....</h3>
     <h3 className='ml-2'>Date of claim</h3> 
    </div>
 

    </div>

    </div>
    </div>

  );
};

export default Claims;