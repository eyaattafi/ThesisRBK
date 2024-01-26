'use client'
import React,{useState,useEffect} from 'react'

import axios from 'axios';
import { GiChart } from "react-icons/gi";
import { FaUsers } from "react-icons/fa";
import { BsBuildings } from "react-icons/bs";
import { BsEmojiGrin } from "react-icons/bs";
import { BsEmojiFrown } from "react-icons/bs";
import Link from 'next/link'
import Table from './Table'

interface Offer{
  offerTitle:string,
  offerImages:string[],
  offerPrice:number,
  offerType:string,
  offerStatus:boolean,
  qrCode:string,
  renterOrNot:boolean,
  latitude:string,
  longitude:string,
  userIduser:number,
  idoffer:number,
  offerDescription:string
}
interface User{
  iduser:number,
  userName:string,
  userEmail:string,
  userPassword:string,
  phone:number,
  userImage:string,
  userBlocked:boolean,
  userLatitude:string,
  userLongitude:string

}

interface reservation  {
  idreservation:number,
  reservationStatus:string,
  reservationStartDate:Date,
  reservationEndDate:Date,
  userIduser:number,
  offerIdoffer:number,
  offer : Offer,
  user: User
}

interface Data {
  userName:string,
   offerTitle:string,
  reservationStartDate:Date,
  reservationEndDate:Date,
}

interface satis {
  idsatisfaction:number,
  satisfactionDegree:string,
  userIduser:number
}
const Admin = () => {

  const userId = localStorage.getItem('userId');
  const [users, setUsers] = useState<User[]>([]);
  const [reserv,setReserv] = useState<reservation[]>([]);
  const [satisfaction,setSatisfaction]=useState<satis[]>([])
  const [purcentage,setPurcentage]= useState<number>(0)
  
// Get all confirmed reservations //
const getAllReservations = () => {
  axios
    .get(`http://localhost:3000/api/getConfirmedReservations`)
    .then((res) => setReserv(res.data))
    .catch((err) => console.log(err));
};
// Get all users // 
const getAllUsers = () => {
  axios
    .get(`http://localhost:3000/api/allUsers`)
    .then((res) => setUsers(res.data))
    .catch((err) => console.log(err));
};

// Get Satisfaction // 

const getSatisfaction = () => {
  axios
    .get(`http://localhost:3000/api/getsat`)
    .then((res) => {setSatisfaction(res.data);
      getPurcentage(res.data)})
    .catch((err) => console.log(err));
};

const getPurcentage = (array : any) => {
  let sat = 0
  for(let i=0; i<array.length; i++ ){
    if(array[i].satisfactionDegree === 'Very satisfied' || array[i].satisfactionDegree === 'Satisfied'){
      sat++
    }
  }
  setPurcentage((sat/array.length)*100)
}


useEffect(() => {
  getAllReservations();
  getAllUsers();
  getSatisfaction();
}, []);





 


  return (
    <div className='grid grid-cols-1'>
     
      {/*Header of Dashboard*/}
    <div className='flex flex-r gap-8 ml-11'>
<div className=' w-64 h-32 rounded-xl bg-pink-700 mt-10 p-3 pt-6 text-white justify-center'> <span className='font-bold text-xl ml-14 mr-4'>{users.length}</span>Total Users <FaUsers className='ml-20' size={55} /></div>
<div className='w-64 h-32 rounded-xl bg-sky-600 mt-10 pt-6  text-white'><span className='font-bold text-xl pl-10'>{purcentage}% </span> Total Satisfaction <div className='flex flex-r gap-6 ml-20 mt-5'><BsEmojiGrin size={30}/> < BsEmojiFrown size={30}/></div> </div>
<div className=' w-72 h-32 rounded-xl bg-green-600 mt-10 pt-6 p-3 text-white ml-5'><span className='font-bold text-xl pl-3'> 3800 DT</span> Gain For This Month <GiChart className='ml-20' size={50} /></div>
<div className='w-72 h-32 rounded-xl bg-amber-400 mt-10 p-3 pt-6 text-white ml-5'><span className='font-bold text-xl pl-3'>{reserv.length} </span> Confirmed Rents Until Now<BsBuildings className=' ml-24' size={50} /> </div>
    </div>

<div><Table/></div>
<div className='bg-transparent w-[1200px] h-[600px] mb-10  '>
      <h1 className='text-2xl font-bold pt-3 mt-10 ml-11'> CLICK TO SEE CHARTS </h1>
    <Link href='/Admin/Dashboard'> <img className='mt-10 ml-10 mb-12 rounded shadow-2xl w-[1200px] h-[400px]' src='https://wiki.scel-hawaii.org/lib/exe/fetch.php?cache=&w=800&h=600&tok=830656&media=weatherbox:dashboard_v2:graphsoftware:graph-clipart-animated-gif-8.gif'/></Link>
    </div>
    <div></div>
    
    </div> 
  )
}

export default Admin
