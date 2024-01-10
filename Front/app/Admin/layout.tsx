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
 <nav className="flex flex-r gap-12">
        <div className='bg-gray-50 shadow-xl rounded w-36 h-full bg-transparent '>

        <ul className='bg-gray-100 shadow-2xl p-4'>
      
        <Link href='/Admin/Inbox' ><MdOutlineForwardToInbox size={50} className='mt-3 ml-10 cursor-pointer transition-all hover:border border-black hover:transform hover:scale-150 '/> </Link>
        <Link href='/Admin/SalesHistorical' ><IoMdTime size={50} className='mt-16 ml-10 cursor-pointer transition-all hover:border border-black hover:transform hover:scale-150 ' /></Link> 
        <Link href='/Admin/Clients' ><IoPeopleOutline size={50} className='mt-16 ml-10  cursor-pointer transition-all hover:border border-black hover:transform hover:scale-150 '/></Link> 
        <Link href='/Admin/Renters' > < MdOutlineHomeWork size={50} className='mt-16 ml-10 cursor-pointer transition-all hover:border border-black hover:transform hover:scale-150 '/></Link> 
        <Link href='/Admin' > <FaChartLine size={50} className='mt-16 ml-10 cursor-pointer transition-all hover:border border-black hover:transform hover:scale-150 '/></Link> 
        <Link href='/Admin/ConfirmRents' > < GiConfirmed size={50} className='mt-16 ml-10 cursor-pointer transition-all hover:border border-black hover:transform hover:scale-150 ' /></Link> 
        <Link href='/Admin/Claims' ><MdOutlineMoodBad size={50} className='mt-16 ml-10 cursor-pointer transition-all hover:border border-black hover:transform hover:scale-150 '  /></Link> 
        <Link href='/Admin/Settings' >< IoSettingsOutline size={50} className='mt-16 ml-10 cursor-pointer transition-all hover:border border-black hover:transform hover:scale-150 ' /></Link>
        </ul>  
   
    </div>
    {children}
    </nav>

      </section>
    )
  }