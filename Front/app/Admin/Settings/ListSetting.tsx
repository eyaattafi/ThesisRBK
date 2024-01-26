'use client'
import react, {useEffect, useState} from 'react';
import axios from 'axios'
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SendIcon from '@mui/icons-material/Send';
import FaceRetouchingOffIcon from '@mui/icons-material/FaceRetouchingOff';
import NoAccountsIcon from '@mui/icons-material/NoAccounts';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import SettingsIcon from '@mui/icons-material/Settings';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Avatar from '@mui/material/Avatar';
import ConfirmDeBlock from './ConfirmDeBlock';
import ConfirmDelete from './ConfirmDelete';
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Slide, Zoom, Flip, Bounce } from 'react-toastify';


interface User {
  iduser: number,
  userName: string,
  userEmail: string,
  userPassword: string,
  userConfirmPass: string,
  userImage: string,
  userBlocked: boolean
}
type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function ListSetting() {

  const [show1, setShow1] =useState<boolean>(false);
  const [show2, setShow2] =useState<boolean>(false);
  const [show3, setShow3] =useState<boolean>(false);
  const [show4, setShow4] =useState<boolean>(false);
  const [show5, setShow5] =useState<boolean>(false);
  const [show6, setShow6] =useState<boolean>(false);
  const [pl, setPl] =useState<boolean>(false);
  const [acc, setAcc] =useState<boolean>(false);
  const [value, onChange] = useState<Value>(new Date());
  const [action,setAction]=useState<string>("");
  const [blockedUsers,setBlockedUsers]=useState<User[]>([])
  const [deblock,setDeblock]=useState<boolean>(false)
  const [id,setId]=useState<number>(0)
  const [refresh,setRefresh]=useState<boolean>(false)
  const [email,setEmail]=useState<string>("")
  const [password,setPassword]=useState<string>("")
  const [name,setName]= useState<string>("")
  const { push } = useRouter();
  const successNot = () => {
    toast.success('🦄 Changes Updated ! ', {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
      });
  
   }

// Get Blocked Clients //
  const fetchBlocked = async () => {
    try {
      const res = await fetch(`http://localhost:3000/api/blocked`);
      const data = await res.json();
      console.log(data);
      
      setBlockedUsers(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(()=>{fetchBlocked()},[refresh])

  //******************* */ Deblock a client*********** // 
  const  deblockClient = (iduser : number) => {
    axios
      .put(`http://localhost:3000/api/updateUser/${iduser}`,{userBlocked: false})
      .then(() => {
        setRefresh(!refresh);
      })
      .catch((err) => {
        console.error(err);
      });
  };

// Add new Admin **********************//
const addAdmin = async () => {
  try{
const res = await fetch("http://localhost:3000/api/addadmin", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    adminName : name,
    adminEmail: email,
    adminPassword: password
  }),
});
console.log(res);

if (res.ok) {

  console.log("Registried")

} else {
  console.log("User registration failed.");
}
} catch (error) {
console.log("Error during registration: ", error);
}}




  const Languages = [
    { label: 'French' },
    { label: 'English'},
    { label: 'Arabic'}]

  const date = [{label : 'yyyy/mm/dd'}, {label : 'dd/mm/yyyy'}]
  const Hour = [{label : 'AM/PM'},{label : '24h'}]
  const timeZone = [{label : 'UTC'},{label : 'UTC+1'},{label : 'UTC+2'},,{label : 'UTC+3'}]

  // Cancel Deblocking the user //
const handleCancel = () => {
  setRefresh(!refresh)
  setDeblock(!deblock)
  setAcc(!acc)
}
// Confirm deblocking the user//
const handleConfirm = () => {
  deblockClient(id)
   setDeblock(!deblock)
}
// Confirm deblocking the user//
const handleDeleteAccount = () => {
  push('/LogAdmin')
  
}



  return (
    <div className='mt-[100px] ml-[100px] flex flex-r w-[1100px] h-auto '>
         <ToastContainer  transition={Zoom}  autoClose={8000}/>
    <List
      sx={{ width: '100%', maxWidth: 300, bgcolor: 'background.paper'}}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
        </ListSubheader>
      }
    >
      <ListItemButton sx={{ mt: 2, mb: 2 ,height: 80}} onClick={()=>{setShow1(true); setShow2(false); setShow3(false); setShow4(false); setShow5(false); setShow6(false)}}>
        <ListItemIcon>
          <SettingsIcon  />
        </ListItemIcon>
        <ListItemText primary="General Settings" />
      </ListItemButton>

      <ListItemButton sx={{ mt: 2, mb: 2,height: 80}}  onClick={()=>{setShow1(false); setShow2(true); setShow3(false); setShow4(false); setShow5(false); setShow6(false)}}>
        <ListItemIcon>
          <SendIcon />
        </ListItemIcon>
        <ListItemText primary="Account Details" />
      </ListItemButton>

      <ListItemButton sx={{ mt: 2, mb: 2,height: 80}} onClick={()=>{setShow1(false); setShow2(false); setShow3(true); setShow4(false); setShow5(false); setShow6(false)}}>
        <ListItemIcon>
          <CalendarMonthIcon/>
        </ListItemIcon>
        <ListItemText primary="Calendar" />
      </ListItemButton>


      <ListItemButton sx={{ mt: 2, mb: 2,height: 80}} onClick={()=>{setShow1(false); setShow2(false); setShow3(false); setShow4(true); setShow5(false); setShow6(false)}}>
        <ListItemIcon>
          <FaceRetouchingOffIcon/>
        </ListItemIcon>
        <ListItemText primary="Blocked Users" />
      </ListItemButton>

      <ListItemButton sx={{ mt: 2, mb: 2,height: 80}} onClick={()=>{setShow1(false); setShow2(false); setShow3(false); setShow4(false); setShow5(true); setShow6(false)}}>
        <ListItemIcon>
          <GroupAddIcon/>
        </ListItemIcon>
        <ListItemText primary="Add new Admin" />
      </ListItemButton>

      <ListItemButton sx={{ mt: 2, mb: 2,height: 80}} onClick={()=>{setShow1(false); setShow2(false); setShow3(false); setShow4(false); setShow5(false); setShow6(true)}}>
        <ListItemIcon>
          <NoAccountsIcon/>
        </ListItemIcon>
        <ListItemText primary="Close Account" />
      </ListItemButton>

   
    </List>
    {/** Component General Settings*/}
   { show1 &&<div className='bg-gray-100 w-[900px] h-auto shadow-xl'>
      <h1 className='mb-6 ml-10 font-bold mt-10'>Languages </h1>
      <div className='ml-10'>
      <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={Languages}
      sx={{ width: 350}}
      renderInput={(params) => <TextField {...params} label="Languages" />}
    />
      </div>
      <h1 className='mb-6 mt-6 ml-10 font-bold'>Date And Hour Format </h1>
      <div className='ml-10'>
      <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={date}
      sx={{ width: 350}}
      renderInput={(params) => <TextField {...params} label="Date Format" />}
    />
    </div>
    <div className='ml-10 mt-4'>
      <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={Hour}
      sx={{ width: 350}}
      renderInput={(params) => <TextField {...params} label="Hour Format" />}
    />
      </div>
      <h1 className='mb-6 mt-6 ml-10 font-bold'>Time Zone </h1>
      <div className='ml-10'>
      <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={timeZone}
      sx={{ width: 350}}
      renderInput={(params) => <TextField {...params} label="Time Zone" />}
    />
    <div className='ml-10 mt-10'> <button className='bg-orange-950 text-white  rounded hover:bg-red-500 pl-3 pr-3 h-8' onClick={()=>{successNot()}}> Confirm Changes </button></div>
    </div>
    </div>}

  {/** Inbox settings*/}

{show2 && <div className='bg-gray-100 w-[900px] h-auto shadow-xl'>
<h1 className='mb-6 mt-10 ml-10 font-bold'>Admin Name </h1>
<input placeholder="Admin Name" className=' h-12 ml-10 pl-5'/>
<h1 className='mb-6 mt-10 ml-10 font-bold'>Email Setting </h1>
<input placeholder="Reset Email Adress" className=' h-12 ml-10 pl-5'/>
  <h1 className='mb-6 mt-10 ml-10 font-bold'>Password Setting </h1>
  <input placeholder="Reset Password" className=' h-12 ml-10 pl-5'/>
  <div className='ml-10 mt-10'> <button className='bg-orange-950 text-white  rounded hover:bg-red-500 pl-3 pr-3 h-8' onClick={()=>{successNot()}}> Confirm Changes </button></div>

  </div>
 }

  {/** Calendar *****************/}
 {show3 && 
   <div className='ml-14 mt-28'>
    <h1 className='font-bold text-xl justify-center mt-10 ml-10 mb-10'> Select your Planifications </h1>
      <Calendar onChange={onChange} value={value} onClickDay={()=>{setPl(true)}} />
      {pl && <div><input className='h-8 w-64 mt-2' placeholder='Describe your planification' onChange={(ev)=>{setAction(ev.target.value)}}/>
      <button className='bg-orange-950 text-white  rounded hover:bg-red-500 pl-3 pr-3 h-8' onClick={()=>{successNot()}}>Validate</button></div>}
  
    </div>
    }

  {/** Blocked Users *****************/}
  {show4 && 
  <div> <h1 className='font-bold text-xl justify-center mt-10 ml-10'> Click on the user you want to deblock </h1>
  <div className='grid grid-cols-4 gap-6 ml-10'>
   
    {blockedUsers.map((el,i)=>(
      <div className='flex flex-r mt-10' onClick={()=>{setDeblock(!deblock); setId(el.iduser)}}>
        <Avatar alt="Remy Sharp" src={el.userImage}  sx={{ width: 60, height: 60 }} />
 <h1 className='ml-6'>{el.userName}</h1>
    </div>))}
    <div> {deblock && <ConfirmDeBlock  onConfirm={handleConfirm} onCancel={handleCancel}/>}</div>
     </div></div>}

  {/** Add new Admin*/}

  {show5 && <div className='bg-gray-100 w-[900px] h-auto shadow-xl'>
<h1 className='mb-6 mt-10 ml-10 font-bold'>Admin Name </h1>
<input placeholder="Admin Name" className=' h-12 ml-10 pl-5 w-96' onChange={(ev)=>{setName(ev.target.value)}}/>
<h1 className='mb-6 mt-10 ml-10 font-bold'>Email Setting </h1>
<input placeholder="Reset Email Adress" className=' h-12 ml-10 pl-5 w-96' onChange={(ev)=>{setEmail(ev.target.value)}}/>
  <h1 className='mb-6 mt-10 ml-10 font-bold'>Password Setting </h1>
  <input placeholder="Reset Password" className=' h-12 ml-10 pl-5 w-96' onChange={(ev)=>{setPassword(ev.target.value)}}/>
 <div className='ml-10 mt-10'> <button className='bg-orange-950 text-white  rounded hover:bg-red-500 pl-3 pr-3 h-8' onClick={()=>{addAdmin()}}> Add Admin </button></div>
  </div>
 }
  {/** Close Account */}

  {show6 && <div className='bg-gray-100 w-[900px] h-auto shadow-xl border-red-500 border-4'>
    <h1 className='font-bold text-xl ml-10 mt-12 mb-10'> Close the Account </h1>
    <div className='grid grid-cols-1 gap-10 '>
    <input className='w-[450px] h-12 ml-8 pl-4' placeholder='Enter Email' onChange={(ev)=>{setEmail(ev.target.value)}}/>
    <input className='w-[450px] h-12 ml-8 pl-4' placeholder='Enter Password' onChange={(ev)=>{setPassword(ev.target.value)}}/>
    <input className='w-[450px] h-12 ml-8 pl-4' placeholder='Confirm Password' onChange={(ev)=>{setPassword(ev.target.value)}}/>
    </div>
    <div className=' mt-12 ml-8'><button className='bg-orange-950 text-white  rounded hover:bg-red-500 pl-3 pr-3 h-8' onClick={()=>{setAcc(!acc)}}>Close Account </button></div>
    <div> {deblock && <ConfirmDelete  onConfirm={handleDeleteAccount} onCancel={handleCancel}/>}</div>
 </div>
 }



    </div>
  );
}