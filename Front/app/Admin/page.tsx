'use client'
import React,{useState,useEffect} from 'react'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import axios from 'axios';
import { GiChart } from "react-icons/gi";
import { FaUsers } from "react-icons/fa";
import { BsBuildings } from "react-icons/bs";
import { BsEmojiGrin } from "react-icons/bs";
import { BsEmojiFrown } from "react-icons/bs";
import { FaRegCheckCircle } from 'react-icons/fa';
import { MdOutlineCancel } from 'react-icons/md';
import Dashboard from './Dashboard/page';
import Link from 'next/link'
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
const Admin = () => {

  const userId = localStorage.getItem('userId');
  const [myOffers, setOffers] = useState<Offer[]>([]);
  const [reserv,setReserv] = useState<reservation[]>([]);
  const [ta,setTa] = useState<Data[]>([])
  
// Get all confirmed reservations //
const getAllReservations = () => {
  axios
    .get(`http://localhost:3000/api/getConfirmedReservations`)
    .then((res) => setReserv(res.data))
    .catch((err) => console.log(err));
};
console.log("resrvation",reserv)


const makeData = () => {
  let arr = []
  for(let i=0; i<reserv.length; i++){
    let obj={id:"",
    userName : '',
    ArrivalDate : new Date,
    DepartureDate : new Date}
    obj.id = reserv[i].offer.offerTitle
    obj.userName = reserv[i].user.userName,
    obj.ArrivalDate = reserv[i].reservationStartDate,
    obj.DepartureDate = reserv[i].reservationEndDate
    arr.push(obj)
  }
  console.log('arr',arr)
  setTa(arr)
}

useEffect(() => {
  getAllReservations();
  makeData();
}, [reserv]);





  // Table // 
  const columns: GridColDef[] = [
    { field: 'id', headerName: 'Confirmed Reservations', width: 400 },
    { field: 'userName', headerName: 'Rent to : ', width: 200 },
    { field: 'ArrivalDate', headerName: 'Arrival Date', width: 250 },
    { field: 'DepartureDate', headerName: 'Departure Date', width: 200 },

  
  ];
  const rows = ta;



  return (
    <div>
      {/*Header of Dashboard*/}
    <div className='flex flex-r gap-8 ml-11'>
<div className=' w-64 h-32 rounded-xl bg-pink-700 mt-10 p-3 pt-6 text-white justify-center'> <span className='font-bold text-xl ml-14'>20 </span>Total Users <FaUsers className='ml-20' size={55} /></div>
<div className='w-64 h-32 rounded-xl bg-sky-600 mt-10 pt-6  text-white'><span className='font-bold text-xl pl-10'>70 % </span> Total Satisfaction <div className='flex flex-r gap-6 ml-20 mt-5'><BsEmojiGrin size={30}/> < BsEmojiFrown size={30}/></div> </div>
<div className=' w-72 h-32 rounded-xl bg-green-600 mt-10 pt-6 p-3 text-white ml-5'><span className='font-bold text-xl pl-3'> 3800 DT</span> Gain For This Month <GiChart className='ml-20' size={50} /></div>
<div className='w-72 h-32 rounded-xl bg-amber-400 mt-10 p-3 pt-6 text-white ml-5'><span className='font-bold text-xl pl-3'>15 </span> Confirmed Rents Until Now<BsBuildings className=' ml-24' size={50} /> </div>
    </div>
{/** Confirmation list */}
<div className='mt-16 mb-16 ml-10'>
  <h1 className='text-2xl font-bold pt-3 mt-10 mb-10'>HOSTS CONFIRMATION </h1>

<div  style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
      
        pageSizeOptions={[5,10]}
        checkboxSelection
       
      />
    </div>
</div>


{/*CHARTS Parts*/}
    <div className='bg-transparent w-[1200px] h-[600px] mt-10  ml-12 '>
      <h1 className='text-2xl font-bold pt-3 mt-10'> CLICK TO SEE CHARTS </h1>
    <Link href='/Admin/Dashboard'> <img className='mt-10 ml-28 mb-12 rounded shadow-2xl w-[1000px] h-[400px]' src='https://webercoder.com/assets/chartjs.png'/></Link>
    </div>
    <div></div>

    </div> 
  )
}

export default Admin
