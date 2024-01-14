import React from "react"
import next from "next"
import Link from "next/link"
import { MdOutlineForwardToInbox } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import { IoPeopleOutline } from "react-icons/io5";
import { MdOutlineHomeWork } from "react-icons/md";
import { FaChartLine } from "react-icons/fa";
import { GiConfirmed } from "react-icons/gi";
import { MdOutlineMoodBad } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import {Tooltip} from "@nextui-org/react";


export default function AdminLayout({
    children, 
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
 <nav className="flex flex-r gap-12 bg-slate-100">
        <div className='bg-gray-50 shadow-xl rounded w-36 h-full bg-transparent pt-6 '>

        <ul className=' p-10 h-[1000px] w-28'>
      
         <Link href='/Admin/Inbox' > <Tooltip content="Inbox"><MdOutlineForwardToInbox size={50} className='text-orange-950 mt-3 ml-4 cursor-pointer transition-all hover:border rounded hover:transform hover:scale-150  hover:text-orange-800 '/></Tooltip> </Link>
        <Link href='/Admin/SalesHistorical' ><Tooltip content="Sales Historical"><IoMdTime size={50} className='text-orange-950  mt-20 ml-4 cursor-pointer transition-all hover:border rounded hover:transform hover:scale-150  hover:text-orange-800' /></Tooltip></Link> 
        <Link href='/Admin/MyClients' ><Tooltip content="My Clients"><IoPeopleOutline size={50} className='text-orange-950  mt-20 ml-4  cursor-pointer transition-all hover:border rounded hover:transform hover:scale-150  hover:text-orange-800'/></Tooltip></Link> 
        <Link href='/Admin/Renters' > <Tooltip content="My Rents">< MdOutlineHomeWork size={50} className='text-orange-950  mt-20 ml-4 cursor-pointer transition-all hover:border rounded hover:transform hover:scale-150  hover:text-orange-800'/></Tooltip></Link> 
        <Link href='/Admin' > <Tooltip content='Dashboard'><FaChartLine size={50} className='text-orange-950  mt-20 ml-4 cursor-pointer transition-all hover:border rounded hover:transform hover:scale-150  hover:text-orange-800'/></Tooltip></Link> 
        <Link href='/Admin/ConfirmRents' ><Tooltip content='Confirmed Rents'>< GiConfirmed size={50} className='text-orange-950  mt-20 ml-4 cursor-pointer transition-all hover:border rounded hover:transform hover:scale-150  hover:text-orange-800' /></Tooltip></Link> 
        <Link href='/Admin/Claims' ><Tooltip content="Claims"><MdOutlineMoodBad size={50} className='text-orange-950  mt-20 ml-4 cursor-pointer transition-all hover:border rounded hover:transform hover:scale-150  hover:text-orange-800'  /></Tooltip></Link> 
        <Link href='/Admin/Settings' > <Tooltip content="Settings">< IoSettingsOutline size={50} className='text-orange-950  mt-20 ml-4 cursor-pointer transition-all hover:border rounded hover:transform hover:scale-150  hover:text-orange-800' /> </Tooltip></Link>
        </ul>  
   
    </div>
    {children}
    </nav>

      </section>
    )
  }