'use client'
import React from 'react'
import ChartOne from './Dashboard/ChartOne'
import ChartFort from './Dashboard/ChartFort'
import ChartThree from './Dashboard/ChartThree'

const Admin = () => {
  return (
    <div className='bg-slate-100  mb-36'>
        <div className='flex justify-center rounded w-60 text-orange-950 h-12 bg-white text-center font-bold pt-2 shadow-2xl mt-6 text-2xl'> DASHBOARD </div>
      
       
      <div className='flex flex-wrap gap-10 mt-8 ml-16 mb-16'>
        {/*************First Chart *********************/}
       <div>
       <div className=" bg-white text-slate-600 border border-slate-300 grid grid-col-2 justify-center p-4 gap-4 rounded-lg shadow-md">
  <div className="col-span-2 text-lg font-bold capitalize rounded-md text-center">
    OFFERS PER REGION
  </div>

  <div className="col-span-1">
  <div className="w-[1000px] h-[470px] rounded ml-6"><ChartOne /></div>
   
  </div>
  

  </div>
       </div>
  
       </div>
       
       {/*************Forth Chart *********************/}
       <div  className='flex flex-wrap' >
       <div>
       <div className=" ml-8 bg-white text-slate-600 border border-slate-300 grid grid-col-2 justify-center p-4 gap-4 rounded-lg shadow-md mb-14">
  <div className="col-span-2 text-lg font-bold capitalize rounded-md text-center ">
 USERS' SATISFACTION
  </div>

  <div className="col-span-1 mb-32">
  <div className="w-[470px] h-[270px] rounded ml-6 "><ChartFort/></div>
     </div>
  

  </div>
       </div>
        {/*************Third Chart *********************/}
        <div>
       <div className=" ml-8 bg-white text-slate-600 border border-slate-300 grid grid-col-2 justify-center p-4 gap-4 rounded-lg shadow-md mb-14">
  <div className="col-span-2 text-lg font-bold capitalize rounded-md text-center ">
 Third Chart
  </div>

  <div className="col-span-1 mb-32">
  <div className="w-[470px] h-[270px] rounded ml-6 "><ChartThree /></div>
     </div>
     </div>

  </div>
       </div>
       </div>

       

  )
}

export default Admin
