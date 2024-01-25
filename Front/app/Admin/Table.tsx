import React,{useState,useEffect} from 'react'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { FaRegCheckCircle } from 'react-icons/fa';
import { MdOutlineCancel } from 'react-icons/md';
import axios from 'axios';

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
  
  interface Data {
    userName:string,
     offerTitle:string,
    reservationStartDate:Date,
    reservationEndDate:Date,
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

const Table = () => {

    const [reserv,setReserv] = useState<reservation[]>([]);
    const [users, setUsers] = useState<User[]>([]);
    const [ta,setTa] = useState<Data[]>([])


    // Get all confirmed reservations //
const getAllReservations = () => {
    axios
      .get(`http://localhost:3000/api/getConfirmedReservations`)
      .then((res) =>{ setReserv(res.data)
      makeData(res.data)})
      
      .catch((err) => console.log(err));
  };

// Get all users // 
const getAllUsers = () => {
    axios
      .get(`http://localhost:3000/api/allUsers`)
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  };
  
const makeData = (array : reservation[]) => {
    let arr = []
    for(let i=0; i<array.length; i++){
      let obj={id:"",
      userName : '',
      ArrivalDate : new Date,
      DepartureDate : new Date}
      obj.id = array[i].offer.offerTitle
      obj.userName = array[i].user.userName,
      obj.ArrivalDate = array[i].reservationStartDate,
      obj.DepartureDate = array[i].reservationEndDate
      arr.push(obj)
    }
    console.log('arr',arr)
    setTa(arr)
  }


useEffect(()=>{ 
    getAllReservations(); 
    getAllUsers()},[])

 // Table // 
 const columns: GridColDef[] = [
    { field: 'id', headerName: 'Confirmed Reservations', width: 400 },
    { field: 'userName', headerName: 'Rent to : ', width: 300 },
    { field: 'ArrivalDate', headerName: 'Arrival Date', width: 300 },
    { field: 'DepartureDate', headerName: 'Departure Date', width: 200 }

  
  ];
  const rows = ta;


  return (
    <div>
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
      <button className='bg-orange-950 text-white  rounded hover:bg-red-500 pl-3 pr-3 h-8'> Confirmation </button>
    </div>
</div> 
    </div>
  )
}

export default Table
