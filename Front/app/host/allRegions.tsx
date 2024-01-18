"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import RegionCard from './regionCard'

function AllRegions() {
  const [regions,setRegions]=useState([])
  useEffect(()=>{
    axios.get('http://localhost:3000/api/getcategorie/region').then((res)=>setRegions(res.data)).catch((err)=>console.log(err))
  },[])
  return (
    <div>
        <h1 className='text-3xl font-bold ml-[10px]'>All Regions</h1>
        <div className='flex flex-row flex-wrap gap-7 p-2'>{regions.map((el,i)=><RegionCard data={el}/>)}</div>
        
    </div>
    
  )
}

export default AllRegions
