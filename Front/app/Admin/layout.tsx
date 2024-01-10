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
export default function AdminLayout({
    children, 
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
 <nav className="flex flex-r gap-12 bg-slate-100">
        <div className='bg-gray-50 shadow-xl rounded w-36 h-full bg-transparent '>

        <ul className=' bg-gray-100 shadow-2xl p-4 bg-orange-950 w-28'>
      
        <Link href='/Admin/Inbox' ><MdOutlineForwardToInbox size={50} className='text-white mt-3 ml-4 cursor-pointer transition-all hover:border rounded hover:transform hover:scale-150 hover:bg-orange-50 hover:text-orange-900 '/> </Link>
        <Link href='/Admin/SalesHistorical' ><IoMdTime size={50} className='text-white mt-16 ml-4 cursor-pointer transition-all hover:border rounded hover:transform hover:scale-150 hover:bg-orange-50 hover:text-orange-900' /></Link> 
        <Link href='/Admin/Clients' ><IoPeopleOutline size={50} className='text-white mt-16 ml-4  cursor-pointer transition-all hover:border rounded hover:transform hover:scale-150 hover:bg-orange-50 hover:text-orange-900'/></Link> 
        <Link href='/Admin/Renters' > < MdOutlineHomeWork size={50} className='text-white mt-16 ml-4 cursor-pointer transition-all hover:border rounded hover:transform hover:scale-150 hover:bg-orange-50 hover:text-orange-900'/></Link> 
        <Link href='/Admin' > <FaChartLine size={50} className='text-white mt-16 ml-4 cursor-pointer transition-all hover:border rounded hover:transform hover:scale-150 hover:bg-orange-50 hover:text-orange-900'/></Link> 
        <Link href='/Admin/ConfirmRents' > < GiConfirmed size={50} className='text-white mt-16 ml-4 cursor-pointer transition-all hover:border rounded hover:transform hover:scale-150 hover:bg-orange-50 hover:text-orange-900' /></Link> 
        <Link href='/Admin/Claims' ><MdOutlineMoodBad size={50} className='text-white mt-16 ml-4 cursor-pointer transition-all hover:border rounded hover:transform hover:scale-150 hover:bg-orange-50 hover:text-orange-900'  /></Link> 
        <Link href='/Admin/Settings' >< IoSettingsOutline size={50} className='text-white mt-16 ml-4 cursor-pointer transition-all hover:border rounded hover:transform hover:scale-150 hover:bg-orange-50 hover:text-orange-900' /></Link>
        </ul>  
   
    </div>
    {children}
    </nav>

      </section>
    )
  }