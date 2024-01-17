'use client'
import React,{useState} from 'react';
import { AiFillCaretDown } from "react-icons/ai";
import { AiFillCaretUp } from "react-icons/ai";
import Link from 'next/link'


const QuestionRes  = () => {

  const [show1,setShow1] = useState<boolean>(false)
  const [show2,setShow2] = useState<boolean>(false)
  const [show3,setShow3] = useState<boolean>(false)
  const [show4,setShow4] = useState<boolean>(false)
  const [show5,setShow5] = useState<boolean>(false)
  return (
    <div className='bg-slate-100 w-3/5 h-auto ml-80 rounded mt-20 mb-20'>

      <button className='shadow-xl w-full h-24 font-bold text-lg pt-3' onClick={()=>{setShow1(!show1)}}> What is RentaVilla and how does the platform work? {!show1 && < AiFillCaretDown/>} </button>
     {show1 && <div className=' w-full h-28 bg-slate-200'><p className='pt-8 pr-6 pl-6 text-justify'>We verify personal profiles and listings to make home sharing simple, enjoyable and secure for millions of hosts and guests around the world. <Link href='/SignIn' className='underline'>Learn more about RentaVilla...</Link><AiFillCaretUp/></p></div>
} 
<button className='shadow-xl w-full h-24 font-bold text-lg  pt-3' onClick={()=>{setShow2(!show2)}}> How to use filters? {!show2 && < AiFillCaretDown/>} </button>
     {show2 && <div className=' w-full h-28 bg-slate-200'> <p className=' pt-8 pr-6 pl-6 text-justify'>Filters make it easy for you to view only homes that have the features you're looking for. Check out this article on using search filters and <Link href='/SignIn' className='underline'>learn about other flexible search methods.</Link> <AiFillCaretUp/></p></div>
} 
<button className='shadow-xl w-full h-24 font-bold text-lg  pt-3' onClick={()=>{setShow3(!show3)}}> Do I have to meet my host in person? {!show3 && < AiFillCaretDown/>} </button>
     {show3 &&  <div className=' w-full h-28 bg-slate-200'>  <p className=' pt-8 pr-6 pl-6 text-justify'>By choosing an entire accommodation or the self-check-in option, you minimize your contact with the host. If necessary, you can use the application's messaging system at any time.<AiFillCaretUp/></p></div>
} 
<button className='shadow-xl w-full h-24 font-bold text-lg  pt-3' onClick={()=>{setShow4(!show4)}}> What happens if I need to cancel due to a problem with the property or host?{!show4 && < AiFillCaretDown/>} </button>
     {show4 &&  <div className=' w-full h-28 bg-slate-200'>  <p className='pt-8 pr-6 pl-6 text-justify'>If there is a problem, you can usually find a solution by sending a message to your host. If the host can't help you, contact RentaVilla within 24 hours of noticing the problem.<Link href='/SignIn' className='underline'> Learn more </Link><AiFillCaretUp/></p></div>
}  
<button className='shadow-xl w-full h-24 font-bold text-lg  pt-3' onClick={()=>{setShow5(!show5)}}> Need more informations? {!show5 && < AiFillCaretDown/>} </button>
     {show5 &&  <div className=' w-full h-28 bg-slate-200'> <p className='pt-8 pr-6 pl-6 text-justify'>  You can find more answers to your questions in the Help Center.<Link href='/SignIn' className='underline'> Learn more </Link><AiFillCaretUp/></p></div>
}  

    </div>
  );
};

export default QuestionRes;