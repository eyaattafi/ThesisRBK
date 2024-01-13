'use client'
import React,{useState,useEffect} from 'react'
import { usePathname } from 'next/navigation'



interface Message {
  idinBox : number,
  inboxObject : string,
  inboxBody : string,
  inboxDate: any,
  inBoxStatus : string,
  user : user
}
interface user {
  iduser: number,
  userName: string,
  userEmail: string,
  userPassword: string,
  userConfirmPass: string,
  userImage: string,
  userBlocked: boolean
}


const SeeMessage = () => {

const router = usePathname()
const [userm,setUserm] = useState<user>({})
const [oneInbox,setOneInbox] = useState<Message>({})
const [show,setShow] = useState<boolean>(false)


// Get idInbox from the path router //
const getidInboxFromUrl = (url : string) => {
const parts = url.split("/")

const potentialId = parts[parts.length-1]
console.log("idInbox",potentialId)
if(Number.isInteger(parseInt(potentialId))){
  return parseInt(potentialId)
}else{
  return null
}}

// Get idUser from the path router //
const getIdUserFromUrl = (url : string) => {
  const parts = url.split("/")
  const potentialId = parts[parts.length-2]
  if(Number.isInteger(parseInt(potentialId))){
    return parseInt(potentialId)
  }else{
    return null
  }}

const idOfUser : number | null = getIdUserFromUrl(router)
const idinbox : number | null = getidInboxFromUrl(router)

// Get oneuser details //
const fetchData = async (iduser : number | null) => {
  try {
    const res = await fetch(`http://localhost:3000/api/oneUser/${iduser}`);
    const data = await res.json();
    console.log(data);
    
    setUserm(data);
  } catch (err) {
    console.error(err);
  }
};

// Get selected Inbox //

const getOneInbox = async (idinBox : number | null) => {
  try {
    const res = await fetch(`http://localhost:3000/api/getOneClaim/${idinBox}`);
    const data = await res.json();
    console.log(data);
    
    setOneInbox(data);
  } catch (err) {
    console.error(err);
  }
};

// Add new Inbox 


useEffect(()=>{
  fetchData(idOfUser)
  getOneInbox(idinbox)
},[])


console.log("id" ,idOfUser)
console.log("userm", userm);


  return (
    <div> 
       <div className='mt-6 mb-6 font-bold text-xl'> Message Content </div>
    <div className='rounded ml-16 w-[1150px] h-[800px] mt-14'> 
   <div className='rounded shadow-lg w-[1150px] h-16 pt-6 pl-6  bg-slate-100 mb-2'> <div className='flex flex-r gap-3'><h1 className='ml-4 font-bold'>From : </h1> {userm.userEmail} </div></div>
      <div className='rounded shadow-lg w-[1150px] h-16 pt-6 pl-6 bg-slate-100'><div className='flex flex-r gap-3'><h1 className='ml-4 font-bold'>Object : </h1>{oneInbox.inboxObject} </div></div>
      <div className='rounded shadow-lg w-[1150px] h-[200px] pt-6 pl-9 bg-slate-100 mt-2'> <div className='flex flex-r gap-3'> <h1 className='font-bold'>Message : </h1> {oneInbox.inboxBody} </div></div>
      <button className="bg-orange-950 text-white px-4 py-2 rounded hover:bg-red-500 mt-12 mb-12 ml-[550px]" onClick={()=>{setShow(!show)}}> ANSWER   </button>
      {show && <div>
        <div className='mt-6 mb-4 font-bold '>Write the Message : </div>
      <div>
      <input type='text' placeholder='Write you message here ' className='rounded shadow-lg w-[1150px] h-[200px] pl-6 bg-slate-100 mt-2'/>
      <button className="bg-orange-950 text-white px-4 py-2 rounded hover:bg-red-500 mt-12"> Send </button></div></div>}
    </div>
    </div>
  )
}

export default SeeMessage;
