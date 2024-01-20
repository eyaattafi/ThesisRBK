"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import RegionCard from './regionCard'
import categories from '../../types/categories'
function AllRegions() {
  const [regions,setRegions]=useState<categories[]>([])
  const [cardNumber,setCards]=useState<Boolean>(false)
  useEffect(()=>{
    axios.get('http://localhost:3000/api/getcategorie/region').then((res)=>setRegions(res.data)).catch((err)=>console.log(err))
  },[])
  const splicedReg= regions.slice(0,8)
  return (
    <div>
        <h1 className='text-3xl font-bold ml-[10px]'>All Regions</h1>
        <div className='flex flex-row flex-wrap gap-7 p-2'>{cardNumber? regions.map((el,i)=><RegionCard data={el}/>):splicedReg.map((el,i)=><RegionCard data={el}/>)}</div>
       {!cardNumber? <button className='flex justify-center bg-slate-800 text-white p-2 rounded mt-4 ml-[600px]' onClick={()=>setCards(!cardNumber)}>show more</button>:
       <button className='flex justify-center bg-slate-800 text-white p-2 rounded mt-4 ml-[600px]' onClick={()=>setCards(!cardNumber)}>show less</button>}
    </div>
    
  )
}

export default AllRegions
