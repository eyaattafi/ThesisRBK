'use client'
import React,{useState,useEffect} from 'react';
import ConfirmDelete from './ConfirmDelete';
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaArrowRotateLeft } from "react-icons/fa6";
import { FaArrowRotateRight } from "react-icons/fa6";
import { FaArrowsRotate } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";


interface Inbox {
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


const Inbox  = () => {

  const [messages,setMessages] = useState<Inbox[]>([])
  const [idinbox,setIdinbox]=useState<number>(0)
  const [refresh,setRefresh]=useState<boolean>(false)
  const [show, setShow] = useState<boolean>(false);
  const [color, setColor] = useState<number>(0);
  const [sh, setSh] = useState<boolean>(false);
  const [inbox, setInbox] = useState<boolean>(false);
  const dat = (new Date().toString()).substring(11,15)

useEffect(()=>{
  fetchData(2)
},[refresh])

// Fetch all messages received by the admin //
  const fetchData = async (idadmin : number) => {
    try {
      const res = await fetch(`http://localhost:3000/api/inboxOfAdmin/2`);
      const data = await res.json();
      console.log(data);
      
      setMessages(data);
    } catch (err) {
      console.error(err);
    }
  };

// Fetch the responses on the messages by the admin //








  console.log("messages : ", messages)




  const deleteMessage = async (idinbox: number) => {
    try {
      await fetch(`http://localhost:3000/api/deleteinbox/${idinbox}`, {
        method: "DELETE",
      });
      setRefresh(!refresh);
    } catch (err) {
      console.error(err);
    }
  };
  
  
  const handleCancel = () => {
    setRefresh(!refresh)
    setShow(!show)
  }

  const handleConfirm = () => {
    deleteMessage(idinbox)
     setShow(!show)
  }

  
  return (
   
   <div>
        <div className='rounded w-32 text-center bg-orange-950 h-12 text-white font-bold pt-2 shadow-2xl ml-6 mt-6 text-2xl'> MAILBOX </div>
        <div className='rounded w-32 text-center bg-white h-12 text-orange-950 font-bold pt-2 shadow-2xl ml-6 mt-6 text-2xl'onClick={()=>{setInbox(inbox)}}> Inbox</div>
        <div className='rounded w-32 text-center bg-white h-12 text-orange-950 font-bold pt-2 shadow-2xl ml-6 mt-6 text-2xl' onClick={()=>{setInbox(!inbox)}}> Sent </div>

{inbox ? <div className='shadow-2xl ml-16 w-[1150px] h-[600px]'>
<div className='flex flex-r justify-start mt-20'>
    <button className='shadow-xl rounded w-12 h-12  bg-gray-200 justify-center hover:bg-gray-300 ml-1 ' onClick={() => {setShow(!show)}}><RiDeleteBin6Line size={30} className=' ml-3'/></button>
    <button className='shadow-xl rounded w-12 h-12  bg-gray-200 justify-center hover:bg-gray-300 ml-1'><FaArrowRotateLeft size={20} className=' ml-3'/></button>
    <button className='shadow-xl rounded w-12 h-12  bg-gray-200 justify-center hover:bg-gray-300 ml-1'><FaArrowRotateRight size={20} className=' ml-3'/></button>
    <button className='shadow-xl rounded w-12 h-12  bg-gray-200 justify-center hover:bg-gray-300 ml-1'>< FaArrowsRotate size={20} className=' ml-3'/></button>
</div>
<div> {show && <ConfirmDelete  onConfirm={handleConfirm} onCancel={handleCancel}/>}</div>
    <div className='mt-12' >

  {messages.map((el,i)=>{
    return (
      <div className='flex flex-r ml-10 mt-8'>
      
       <label><input type="checkbox" className='mr-6' onClick={()=>{setIdinbox(el.idinBox)}}/></label>
       <button onClick={()=>{setSh(!sh);setColor(el.idinBox)}}><CiStar color={sh && color===el.idinBox?'red':'black'} size={25} className='mr-6'/> </button>
       <ul className='columns-4'>

       <li className='ml-6 text-blue-900 font-bold'> {el.user.userName} </li> 
       <li className='font-bold'> {dat}/{i}/{el.user.iduser}</li>
       <li className=''>{(el.inboxBody).substring(0,25)}...</li>
       <li className='ml-44'>date {el.inboxDate}</li> 

       </ul>
      </div>
    )
    
  })}
   

    </div>

    </div> :    
    
    <div className='shadow-2xl ml-16 w-[1150px] h-[600px]'>
<div className='flex flex-r justify-start mt-20'>
    <button className='shadow-xl rounded w-12 h-12  bg-gray-200 justify-center hover:bg-gray-300 ml-1 ' onClick={() => {setShow(!show)}}><RiDeleteBin6Line size={30} className=' ml-3'/></button>
    <button className='shadow-xl rounded w-12 h-12  bg-gray-200 justify-center hover:bg-gray-300 ml-1'><FaArrowRotateLeft size={20} className=' ml-3'/></button>
    <button className='shadow-xl rounded w-12 h-12  bg-gray-200 justify-center hover:bg-gray-300 ml-1'><FaArrowRotateRight size={20} className=' ml-3'/></button>
    <button className='shadow-xl rounded w-12 h-12  bg-gray-200 justify-center hover:bg-gray-300 ml-1'>< FaArrowsRotate size={20} className=' ml-3'/></button>
</div>
<div> {show && <ConfirmDelete  onConfirm={handleConfirm} onCancel={handleCancel}/>}</div>
    <div className='mt-12' >

  {messages.map((el,i)=>{
    return (
      <div className='flex flex-r ml-10 mt-8'>
      
       <label><input type="checkbox" className='mr-6' onClick={()=>{setIdinbox(el.idinBox)}}/></label>
       <button onClick={()=>{setSh(!sh);setColor(el.idinBox)}}><CiStar color={sh && color===el.idinBox?'red':'black'} size={25} className='mr-6'/> </button>
       <ul className='columns-4'>

       <li className='ml-6 text-blue-900 font-bold'> {el.user.userName} </li> 
       <li className='font-bold'> {dat}/{i}/{el.user.iduser}</li>
       <li className=''>{(el.inboxBody).substring(0,25)}...</li>
       <li className='ml-44'>date {el.inboxDate}</li> 

       </ul>
      </div>
    )
    
  })}
   

    </div>

    </div>}
   
    </div>

  );
};

export default Inbox;