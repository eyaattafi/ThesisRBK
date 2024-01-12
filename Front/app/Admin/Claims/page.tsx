'use client'
import React,{useState,useEffect} from 'react';
import Link from 'next/link'
import {Tooltip} from "@nextui-org/react";
import ConfirmDelete from './ConfirmDelete';
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaArrowRotateLeft } from "react-icons/fa6";
import { FaArrowRotateRight } from "react-icons/fa6";
import { FaArrowsRotate } from "react-icons/fa6";
import { IoIosStar } from "react-icons/io";
import { useRouter } from 'next/router'


interface Claim {
  idinBox : number,
  inBoxObject : string,
  inboxBody : string,
  inboxDate: any,
  inBoxStatus : string,
  user : User
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

  const [claim,setClaim] = useState<Claim[]>([]) //All Claims sent to the admin//
  const [idclaim,setIdclaim]=useState<number>(0) // Set the id of claim to delete it //
  const [refresh,setRefresh]=useState<boolean>(false) //refresh to reget the data //
  const [show, setShow] = useState<boolean>(false); //show the deleteConfirmation //
  const [color, setColor] = useState<number>(0); //Change the color of the star on clicking //
  const [sh, setSh] = useState<boolean>(false); // Decolore the star on double click//
  const dat = (new Date().toString()).substring(11,15) // Use the year date in the reference of the claims // 

useEffect(()=>{
  fetchData(2)
},[refresh])

// Get all claims sent to the admin //
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
  console.log("idMessage", idclaim)




// delete a claim //
  const deleteClaim = async (idinbox: number) => {
    try {
      await fetch(`http://localhost:3000/api/deleteinbox/${idinbox}`, {
        method: "DELETE",
      });
      setRefresh(!refresh);
    } catch (err) {
      console.error(err);
    }
  };
  
  // Cancel deleting the claim//
  const handleCancel = () => {
    setRefresh(!refresh)
    setShow(!show)
  }
// Confirm deleting the claim //
  const handleConfirm = () => {
    deleteClaim(idclaim)
     setShow(!show)
  }

  console.log("claim", claim)



  return (
   
   <div>
        <div className='rounded w-32 text-center h-12 text-orange-950 font-bold pt-2 ml-6 mt-6 text-xl'> CLAIMS </div>

<div className='shadow-2xl ml-16 w-[1150px] h-[600px]'>
<div className='flex flex-r justify-start mt-20'>

<Tooltip content="Delete"><button className='shadow-xl rounded w-12 h-12  bg-gray-200 justify-center hover:bg-gray-300 ml-1 ' onClick={() => {setShow(!show)}}> <RiDeleteBin6Line size={30} className=' ml-3'/></button></Tooltip>
 <button className='shadow-xl rounded w-12 h-12  bg-gray-200 justify-center hover:bg-gray-300 ml-1'><FaArrowRotateLeft size={20} className=' ml-3'/></button>
<button className='shadow-xl rounded w-12 h-12  bg-gray-200 justify-center hover:bg-gray-300 ml-1'> <FaArrowRotateRight size={20} className=' ml-3'/></button>
  <button className='shadow-xl rounded w-12 h-12  bg-gray-200 justify-center hover:bg-gray-300 ml-1'>< FaArrowsRotate size={20} className=' ml-3'/></button>
  <button className='shadow-xl rounded w-32 h-12 font-bold  bg-gray-200 justify-center hover:bg-gray-300 ml-1'><Link href="/Admin/Claims/ClaimsResponse">My Messages</Link> </button>
</div>
<div> {show && <ConfirmDelete  onConfirm={handleConfirm} onCancel={handleCancel}/>}</div>
    <div className='mt-12' >

  {claim.map((el,i)=>{
    return (
      <div className='flex flex-r ml-10 mt-8'>
      
       <label><input type="checkbox" className='mr-6' onClick={()=>{setIdclaim(el.idinBox)}}/></label>
       <button onClick={()=>{setSh(!sh);setColor(el.idinBox)}}><IoIosStar color={sh && color===el.idinBox?'red':'black'} size={25} className='mr-6'/> </button>
       <ul className='columns-4'>

       <li className='ml-6 text-blue-900 font-bold' > <Link href={`/Admin/Claims/${el.user.iduser}/${el.idinBox}`} >{el.user.userName} </Link> </li> 
       <li className='font-bold'>  <Link href={`/Admin/Claims/${el.user.iduser}/${el.idinBox}`} >{dat}/{i}/{el.user.iduser} </Link></li>
       <li className=''><Link href={`/Admin/Claims/${el.user.iduser}/${el.idinBox}`} >{(el.inboxBody).substring(0,25)}...  </Link></li>
       <li className='ml-44'>date {el.inboxDate}</li> 

       </ul>
      </div>
    )
    
  })}
   

    </div>

    </div>
    </div>

  );
};

export default Claims;